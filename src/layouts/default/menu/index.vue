<script lang="tsx">
import type { PropType, CSSProperties } from "vue";
import { computed, defineComponent, unref, toRef } from "vue";
import { BasicMenu } from "/@/components/general/Menu";
import { SimpleMenu } from "/@/components/general/SimpleMenu";
import { AppLogo } from "/@/components/general/Application";
import { MenuModeEnum, MenuSplitTyeEnum } from "/@/enums/MenuEnum";
import { useMenuSetting } from "/@/hooks/setting/UseMenuSetting";
import { ScrollContainer } from "/@/components/general/Container";
import { useGo } from "/@/hooks/web/UsePage";
import { useSplitMenu } from "./UseLayoutMenu";
import { openWindow } from "/@/utils";
import { propTypes } from "/@/utils/PropTypes";
import { isUrl } from "/@/utils/Is";
import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
import { useAppInject } from "/@/hooks/web/UseAppInject";
import { useDesign } from "/@/hooks/web/UseDesign";
import { ThemeEnum } from "/@/enums/AppEnum";

export default defineComponent({
  name: "LayoutMenu",
  props: {
    theme: propTypes.oneOf(["light", "dark"]),

    splitType: {
      type: Number as PropType<MenuSplitTyeEnum>,
      default: MenuSplitTyeEnum.NONE
    },

    isHorizontal: propTypes.bool,
    // menu Mode
    menuMode: {
      type: [String] as PropType<Nullable<MenuModeEnum>>,
      default: ""
    }
  },
  setup(props) {
    const go = useGo();

    const {
      getMenuMode,
      getMenuType,
      getMenuTheme,
      getCollapsed,
      getCollapsedShowTitle,
      getAccordion,
      getIsHorizontal,
      getIsSidebarType,
      getSplit
    } = useMenuSetting();
    const { getShowLogo } = useRootSetting();

    const { prefixCls } = useDesign("layout-menu");

    const { menusRef } = useSplitMenu(toRef(props, "splitType"));

    const { getIsMobile } = useAppInject();

    const getComputedMenuMode = computed(() =>
      unref(getIsMobile) ? MenuModeEnum.INLINE : props.menuMode || unref(getMenuMode)
    );

    const getComputedMenuTheme = computed(() => props.theme || unref(getMenuTheme));

    const getIsShowLogo = computed(() => unref(getShowLogo) && unref(getIsSidebarType));

    const getUseScroll = computed(() => {
      return (
        !unref(getIsHorizontal) &&
        (unref(getIsSidebarType) ||
          props.splitType === MenuSplitTyeEnum.LEFT ||
          props.splitType === MenuSplitTyeEnum.NONE)
      );
    });

    const getWrapperStyle = computed((): CSSProperties => {
      return {
        height: `calc(100% - ${unref(getIsShowLogo) ? "48px" : "0px"})`
      };
    });

    const getLogoClass = computed(() => {
      return [
        `${prefixCls}-logo`,
        unref(getComputedMenuTheme),
        {
          [`${prefixCls}--mobile`]: unref(getIsMobile)
        }
      ];
    });

    const getCommonProps = computed(() => {
      const menus = unref(menusRef);
      return {
        menus,
        beforeClickFn: beforeMenuClickFn,
        items: menus,
        theme: unref(getComputedMenuTheme),
        accordion: unref(getAccordion),
        collapse: unref(getCollapsed),
        collapsedShowTitle: unref(getCollapsedShowTitle),
        onMenuClick: handleMenuClick
      };
    });

    /**
     * click menu
     * @param menu
     */

    function handleMenuClick(path: string) {
      go(path);
    }

    /**
     * before click menu
     * @param menu
     */
    async function beforeMenuClickFn(path: string) {
      if (!isUrl(path)) {
        return true;
      }
      openWindow(path);
      return false;
    }

    function renderHeader() {
      if (!unref(getIsShowLogo) && !unref(getIsMobile)) return null;

      return (
        <AppLogo
          showTitle={!unref(getCollapsed)}
          class={unref(getLogoClass)}
          theme={unref(getComputedMenuTheme)}
        />
      );
    }

    function renderMenu() {

      const { menus, ...menuProps } = unref(getCommonProps);
      if (!menus || !menus.length) return null;
      //菜单为头部菜单时，强制设置菜单样式为light，重写light的字体颜色，查看updateBackground.ts
      return !props.isHorizontal ? (
        <SimpleMenu {...menuProps} isSplitMenu={unref(getSplit)} items={menus} />
      ) : (
        <BasicMenu
          {...(menuProps as any)}
          theme={ThemeEnum.LIGHT}
          isHorizontal={props.isHorizontal}
          type={unref(getMenuType)}
          showLogo={unref(getIsShowLogo)}
          mode={unref(getComputedMenuMode as any)}
          items={menus}
        />
      );
    }

    return () => {
      return (
        <>
          {renderHeader()}
          {unref(getUseScroll) ? (
            <ScrollContainer style={unref(getWrapperStyle)}>{() => renderMenu()}</ScrollContainer>
          ) : (
            renderMenu()
          )}
        </>
      );
    };
  }
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-layout-menu';
@logo-prefix-cls: ~'@{namespace}-app-logo';

.@{prefix-cls} {
  &-logo {
    height: @header-height;
    padding: 10px 4px 10px 10px;

    img {
      width: @logo-width;
      height: @logo-width;
    }
  }

  &--mobile {
    .@{logo-prefix-cls} {
      &__title {
        opacity: 100%;
      }
    }
  }
}
</style>
