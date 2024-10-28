import { defineAsyncComponent, h } from "vue";
import { Spin } from "ant-design-vue";
import { noop } from "@/utils";

interface Options {
  size?: "default" | "small" | "large";
  delay?: number;
  timeout?: number;
  loading?: boolean;
  retry?: boolean;
}

export function createAsyncComponent(loader: Fn, options: Options = {}) {
  const { size = "small", delay = 100, timeout = 30_000, loading = false, retry = true } = options;
  return defineAsyncComponent({
    loader,
    loadingComponent: loading
      ? h(
          "div",
          { style: "display: flex;align-items: center;justify-content: center;height:100%" },
          <Spin spinning={true} size={size} />
        )
      : undefined,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    // TODO
    timeout,
    // errorComponent
    // Defining if component is suspensible. Default: true.
    // suspensible: false,
    delay,
    /**
     *
     * @param {*} error Error message object
     * @param {*} retry A function that indicating whether the async component should retry when the loader promise rejects
     * @param {*} fail  End of failure
     * @param {*} attempts Maximum allowed retries number
     */
    onError: retry
      ? (error, retry, fail, attempts) => {
          if (/fetch/.test(error.message) && attempts <= 3) {
            // retry on fetch errors, 3 max attempts
            retry();
          } else {
            // Note that retry/fail are like resolve/reject of a promise:
            // one of them must be called for the error handling to continue.
            fail();
          }
        }
      : noop
  });
}
