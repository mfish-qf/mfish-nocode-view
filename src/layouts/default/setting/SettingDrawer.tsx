import { computed, defineComponent, ref, Transition, unref } from "vue";
import { BasicDrawer } from "@mfish/core/components/Drawer";
import { Divider, Segmented } from "ant-design-vue";
import {
  Animation,
  InputNumberItem,
  SelectItem,
  SettingSave,
  SwitchItem,
  ThemeColorPicker,
  TypePicker
} from "./components";
import { AppDarkModeToggle } from "@/components/general/Application";
import { MenuTypeEnum, TriggerEnum } from "@mfish/core/enums";
import { useHeaderSetting, useI18n, useMenuSetting, useMultipleTabSetting, useRootSetting } from "@mfish/core/hooks";
import { baseHandler } from "./Handler";
import {
  contentModeOptions,
  getMenuTriggerOptions,
  HandlerEnum,
  menuTypeList,
  mixSidebarTriggerOptions,
  topMenuAlignOptions
} from "./Enum";
import {
  APP_PRESET_COLOR_LIST,
  HEADER_PRESET_BG_COLOR_LIST,
  SIDE_BAR_BG_COLOR_LIST
} from "@mfish/core/settings/DesignSetting";

const { t } = useI18n();

export default defineComponent({
  name: "SettingDrawer",
  setup(_, { attrs }) {
    const {
      getContentMode,
      getShowFooter,
      getShowBreadCrumb,
      getShowBreadCrumbIcon,
      getShowLogo,
      getFullContent,
      getColorWeak,
      getGrayMode,
      getLockTime,
      getShowDarkModeToggle,
      getThemeColor
    } = useRootSetting();

    const {
      getIsHorizontal,
      getShowMenu,
      getMenuType,
      getTrigger,
      getCollapsedShowTitle,
      getMenuFixed,
      getCollapsed,
      getCanDrag,
      getTopMenuAlign,
      getAccordion,
      getMenuWidth,
      getMenuBgColor,
      getIsTopMenu,
      getSplit,
      getIsMixSidebar,
      getCloseMixSidebarOnChange,
      getMixSideTrigger,
      getMixSideFixed
    } = useMenuSetting();

    const { getShowHeader, getFixed: getHeaderFixed, getHeaderBgColor, getShowSearch } = useHeaderSetting();

    const { getShowMultipleTab, getShowQuick, getShowRedo, getShowFold } = useMultipleTabSetting();

    const getShowMenuRef = computed(() => {
      return unref(getShowMenu) && !unref(getIsHorizontal);
    });

    function renderSidebar() {
      return (
        <TypePicker
          menuTypeList={menuTypeList}
          handler={(item: (typeof menuTypeList)[0]) => {
            baseHandler(HandlerEnum.CHANGE_LAYOUT, {
              mode: item.mode,
              type: item.type,
              split: unref(getIsHorizontal) ? false : undefined
            });
          }}
          def={unref(getMenuType)}
        />
      );
    }

    function renderHeaderTheme() {
      return (
        <ThemeColorPicker
          colorList={HEADER_PRESET_BG_COLOR_LIST}
          def={unref(getHeaderBgColor)}
          event={HandlerEnum.HEADER_THEME}
        />
      );
    }

    function renderSiderTheme() {
      return (
        <ThemeColorPicker
          colorList={SIDE_BAR_BG_COLOR_LIST}
          def={unref(getMenuBgColor)}
          event={HandlerEnum.MENU_THEME}
        />
      );
    }

    function renderMainTheme() {
      return (
        <ThemeColorPicker
          colorList={APP_PRESET_COLOR_LIST}
          def={unref(getThemeColor)}
          event={HandlerEnum.CHANGE_THEME_COLOR}
          pickerType={1}
        />
      );
    }

    /**
     @description: */
    function renderFeatures() {
      let triggerDef = unref(getTrigger);

      const triggerOptions = getMenuTriggerOptions(unref(getSplit));
      const some = triggerOptions.some((item) => item.value === triggerDef);
      if (!some) {
        triggerDef = TriggerEnum.FOOTER;
      }

      return (
        <div>
          <SwitchItem
            title={t("layout.setting.splitMenu")}
            event={HandlerEnum.MENU_SPLIT}
            def={unref(getSplit)}
            v-show={unref(getShowMenuRef) && unref(getMenuType) === MenuTypeEnum.MIX}
          />
          <SwitchItem
            title={t("layout.setting.mixSidebarFixed")}
            event={HandlerEnum.MENU_FIXED_MIX_SIDEBAR}
            def={unref(getMixSideFixed)}
            v-show={unref(getIsMixSidebar)}
          />

          <SwitchItem
            title={t("layout.setting.closeMixSidebarOnChange")}
            event={HandlerEnum.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE}
            def={unref(getCloseMixSidebarOnChange)}
            v-show={unref(getIsMixSidebar)}
          />
          <SwitchItem
            title={t("layout.setting.menuCollapse")}
            event={HandlerEnum.MENU_COLLAPSED}
            def={unref(getCollapsed)}
            v-show={unref(getShowMenuRef)}
          />

          <SwitchItem
            title={t("layout.setting.menuDrag")}
            event={HandlerEnum.MENU_HAS_DRAG}
            def={unref(getCanDrag)}
            v-show={unref(getShowMenuRef)}
          />
          <SwitchItem
            title={t("layout.setting.menuSearch")}
            event={HandlerEnum.HEADER_SEARCH}
            def={unref(getShowSearch)}
            v-show={unref(getShowHeader)}
          />
          <SwitchItem
            title={t("layout.setting.menuAccordion")}
            event={HandlerEnum.MENU_ACCORDION}
            def={unref(getAccordion)}
            v-show={unref(getShowMenuRef)}
          />

          <SwitchItem
            title={t("layout.setting.collapseMenuDisplayName")}
            event={HandlerEnum.MENU_COLLAPSED_SHOW_TITLE}
            def={unref(getCollapsedShowTitle)}
            v-show={unref(getShowMenuRef) && unref(getCollapsed) && !unref(getIsMixSidebar)}
          />

          <SwitchItem
            title={t("layout.setting.fixedHeader")}
            event={HandlerEnum.HEADER_FIXED}
            def={unref(getHeaderFixed)}
            v-show={unref(getShowHeader)}
          />
          <SwitchItem
            title={t("layout.setting.fixedSideBar")}
            event={HandlerEnum.MENU_FIXED}
            def={unref(getMenuFixed)}
            v-show={unref(getShowMenuRef) && !unref(getIsMixSidebar)}
          />
          <SelectItem
            title={t("layout.setting.mixSidebarTrigger")}
            event={HandlerEnum.MENU_TRIGGER_MIX_SIDEBAR}
            def={unref(getMixSideTrigger)}
            options={mixSidebarTriggerOptions}
            v-show={unref(getIsMixSidebar)}
          />
          <SelectItem
            title={t("layout.setting.topMenuLayout")}
            event={HandlerEnum.MENU_TOP_ALIGN}
            def={unref(getTopMenuAlign)}
            options={topMenuAlignOptions}
            v-show={
              !(
                !unref(getShowHeader) ||
                unref(getSplit) ||
                (!unref(getIsTopMenu) && !unref(getSplit)) ||
                unref(getIsMixSidebar)
              )
            }
          />
          <SelectItem
            title={t("layout.setting.menuCollapseButton")}
            event={HandlerEnum.MENU_TRIGGER}
            def={triggerDef}
            options={triggerOptions}
            v-show={unref(getShowMenuRef) && !unref(getIsMixSidebar)}
          />
          <SelectItem
            title={t("layout.setting.contentMode")}
            event={HandlerEnum.CONTENT_MODE}
            def={unref(getContentMode)}
            options={contentModeOptions}
          />
          <InputNumberItem
            title={t("layout.setting.autoScreenLock")}
            min={0}
            event={HandlerEnum.LOCK_TIME}
            defaultValue={unref(getLockTime)}
            formatter={(value: string) => {
              return Number.parseInt(value) === 0
                ? `0(${t("layout.setting.notAutoScreenLock")})`
                : `${value}${t("layout.setting.minute")}`;
            }}
          />
          <InputNumberItem
            title={t("layout.setting.expandedMenuWidth")}
            max={600}
            min={100}
            step={10}
            event={HandlerEnum.MENU_WIDTH}
            v-show={unref(getShowMenuRef)}
            defaultValue={unref(getMenuWidth)}
            formatter={(value: string) => `${Number.parseInt(value)}px`}
          />
        </div>
      );
    }

    function renderContent() {
      return (
        <div>
          <SwitchItem
            title={t("layout.setting.breadcrumb")}
            event={HandlerEnum.SHOW_BREADCRUMB}
            def={unref(getShowBreadCrumb)}
            v-show={unref(getShowHeader) && !unref(getIsTopMenu)}
          />

          <SwitchItem
            title={t("layout.setting.breadcrumbIcon")}
            event={HandlerEnum.SHOW_BREADCRUMB_ICON}
            def={unref(getShowBreadCrumbIcon)}
            v-show={unref(getShowHeader) && !unref(getIsTopMenu)}
          />

          <SwitchItem title={t("layout.setting.tabs")} event={HandlerEnum.TABS_SHOW} def={unref(getShowMultipleTab)} />

          <SwitchItem
            title={t("layout.setting.tabsRedoBtn")}
            event={HandlerEnum.TABS_SHOW_REDO}
            def={unref(getShowRedo)}
            v-show={unref(getShowMultipleTab)}
          />

          <SwitchItem
            title={t("layout.setting.tabsQuickBtn")}
            event={HandlerEnum.TABS_SHOW_QUICK}
            def={unref(getShowQuick)}
            v-show={unref(getShowMultipleTab)}
          />
          <SwitchItem
            title={t("layout.setting.tabsFoldBtn")}
            event={HandlerEnum.TABS_SHOW_FOLD}
            def={unref(getShowFold)}
            v-show={unref(getShowMultipleTab)}
          />

          <SwitchItem
            title={t("layout.setting.sidebar")}
            event={HandlerEnum.MENU_SHOW_SIDEBAR}
            def={unref(getShowMenu)}
            v-show={!unref(getIsHorizontal)}
          />

          <SwitchItem title={t("layout.setting.header")} event={HandlerEnum.HEADER_SHOW} def={unref(getShowHeader)} />
          <SwitchItem
            title='Logo'
            event={HandlerEnum.SHOW_LOGO}
            def={unref(getShowLogo)}
            v-show={!unref(getIsMixSidebar)}
          />
          <SwitchItem title={t("layout.setting.footer")} event={HandlerEnum.SHOW_FOOTER} def={unref(getShowFooter)} />
          <SwitchItem
            title={t("layout.setting.fullContent")}
            event={HandlerEnum.FULL_CONTENT}
            def={unref(getFullContent)}
          />

          <SwitchItem title={t("layout.setting.grayMode")} event={HandlerEnum.GRAY_MODE} def={unref(getGrayMode)} />

          <SwitchItem title={t("layout.setting.colorWeak")} event={HandlerEnum.COLOR_WEAK} def={unref(getColorWeak)} />
        </div>
      );
    }

    function renderTransition() {
      return <Animation />;
    }
    const curTab = ref(t("layout.setting.themeAnimation"));

    return () => (
      <BasicDrawer {...attrs} title={t("layout.setting.themeStyle")} width={330}>
        <Segmented
          block
          value={curTab.value}
          options={[t("layout.setting.themeAnimation"), t("layout.setting.frameSetting")]}
          onChange={(val) => (curTab.value = val as string)}
        />
        <Transition name='fade-slide-left'>
          <div v-show={curTab.value === t("layout.setting.themeAnimation")}>
            {unref(getShowDarkModeToggle) && <Divider>{() => t("layout.setting.darkMode")}</Divider>}
            {unref(getShowDarkModeToggle) && (
              <div style='display: flex;justify-content: center;'>
                <AppDarkModeToggle />
              </div>
            )}
            <Divider>{() => t("layout.setting.frameLayout")}</Divider>
            {renderSidebar()}
            <Divider>{() => t("layout.setting.sysTheme")}</Divider>
            {renderMainTheme()}
            <Divider>{() => t("layout.setting.headerTheme")}</Divider>
            {renderHeaderTheme()}
            <Divider>{() => t("layout.setting.sidebarTheme")}</Divider>
            {renderSiderTheme()}
            <Divider>{() => t("layout.setting.animation")}</Divider>
            {renderTransition()}
          </div>
        </Transition>
        <div v-show={curTab.value === t("layout.setting.frameSetting")}>
          <Divider>{() => t("layout.setting.interfaceFunction")}</Divider>
          {renderFeatures()}
          <Divider>{() => t("layout.setting.interfaceDisplay")}</Divider>
          {renderContent()}
        </div>
        <SettingSave />
      </BasicDrawer>
    );
  }
});
