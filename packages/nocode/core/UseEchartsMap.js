import { watch, nextTick } from "vue";
import { cloneDeep } from "lodash-es";
import { u as useScreenEditStore } from "./index.js";
const geoCoordinate = {
  "安庆市": [117.044965, 30.506375],
  "蚌埠市": [117.245, 32.865],
  "亳州市": [116.01, 33.78],
  "池州市": [117.215, 29.92],
  "滁州市": [118.11, 32.32],
  "阜阳市": [115.505, 33.145],
  "合肥市": [116.995, 31.445],
  "淮北市": [116.635, 33.63],
  "淮南市": [116.669, 32.276],
  "黄山市": [117.785, 29.74],
  "六安市": [116.17, 31.705],
  "马鞍山市": [118.025, 31.63],
  "宿州市": [117.095, 33.78],
  "铜陵市": [117.565, 30.735],
  "芜湖市": [117.92, 30.765],
  "宣城市": [118.49, 30.38],
  "澳门特别行政区": [113.33, 22.11],
  "大堂区": [113.5536475, 22.18853944],
  "风顺堂区": [113.5419278, 22.18736806],
  "花地玛堂区": [113.5528956, 22.20787],
  "花王堂区": [113.5489608, 22.1992075],
  "嘉模堂区": [113.5587044, 22.15375944],
  "路凼填海区": [113.5695992, 22.13663],
  "圣方济各堂区": [113.5599542, 22.12348639],
  "望德堂区": [113.5501828, 22.19372083],
  "昌平区": [116.235906, 40.218085],
  "北京市": [116.2, 39.56],
  "朝阳区": [116.486409, 39.921489],
  "大兴区": [116.338033, 39.728908],
  "东城区": [116.418757, 39.917544],
  "房山区": [116.139157, 39.735535],
  "丰台区": [116.286968, 39.863642],
  "海淀区": [116.310316, 39.956074],
  "怀柔区": [116.637122, 40.324272],
  "门头沟区": [116.105381, 39.937183],
  "密云区": [116.843352, 40.377362],
  "平谷区": [117.112335, 40.144783],
  "石景山区": [116.195445, 39.914601],
  "顺义区": [116.653525, 40.128936],
  "通州区": [116.658603, 39.902486],
  "西城区": [116.366794, 39.915309],
  "延庆区": [115.985006, 40.465325],
  "巴南区": [106.519423, 29.381919],
  "重庆市": [107.61, 30.115],
  "北碚区": [106.437868, 29.82543],
  "璧山区": [106.231126, 29.593581],
  "城口县": [108.6649, 31.946293],
  "大渡口区": [106.48613, 29.481002],
  "大足区": [105.715319, 29.700498],
  "垫江县": [107.348692, 30.330012],
  "丰都县": [107.73248, 29.866424],
  "奉节县": [109.465774, 31.019967],
  "涪陵区": [107.394905, 29.703652],
  "合川区": [106.265554, 29.990993],
  "江北区": [106.532844, 29.575352],
  "江津区": [106.253156, 29.283387],
  "九龙坡区": [106.480989, 29.523492],
  "开州区": [108.413317, 31.167735],
  "梁平区": [107.800034, 30.672168],
  "南岸区": [106.560813, 29.523992],
  "南川区": [107.098153, 29.156646],
  "彭水苗族土家族自治县": [108.166551, 29.293856],
  "綦江区": [106.651417, 29.028091],
  "黔江区": [108.782577, 29.527548],
  "荣昌区": [105.594061, 29.403627],
  "沙坪坝区": [106.4542, 29.541224],
  "石柱土家族自治县": [108.112448, 29.99853],
  "铜梁区": [106.054948, 29.839944],
  "潼南区": [105.841818, 30.189554],
  "万州区": [108.380246, 30.807807],
  "巫山县": [109.878928, 31.074843],
  "巫溪县": [109.628912, 31.3966],
  "武隆区": [107.75655, 29.32376],
  "秀山土家族苗族自治县": [108.996043, 28.444772],
  "永川区": [105.894714, 29.348748],
  "酉阳土家族苗族自治县": [108.767201, 28.839828],
  "渝北区": [106.512851, 29.601451],
  "渝中区": [106.56288, 29.556742],
  "云阳县": [108.697698, 30.930529],
  "长寿区": [107.074854, 29.833671],
  "忠县": [108.037518, 30.291537],
  "福州市": [119.195, 25.77],
  "龙岩市": [116.48, 25.125],
  "南平市": [118.085, 27.17],
  "宁德市": [119.375, 26.79],
  "莆田市": [118.915, 25.025],
  "泉州市": [118.15, 24.93],
  "三明市": [117.305, 26.185],
  "厦门市": [117.895, 24.385],
  "漳州市": [117.31, 24.245],
  "白银市": [104.335, 36.355],
  "定西市": [104.325, 34.805],
  "甘南藏族自治州": [102.45, 34.58],
  "嘉峪关市": [98.17, 39.47],
  "金昌市": [101.73875, 38.237],
  "酒泉市": [96.2, 40.285],
  "兰州市": [103.4, 36.03],
  "临夏回族自治州": [103.211, 35.601],
  "陇南市": [105.18195, 33.33725],
  "平凉市": [107.875, 34.985],
  "庆阳市": [107.325, 36.125],
  "天水市": [105.395, 34.575],
  "武威市": [102.825, 37.78],
  "张掖市": [99.66, 38.425],
  "潮州市": [116.665, 23.7],
  "东莞市": [113.73, 22.74],
  "佛山市": [113.06, 23.02],
  "广州市": [113.1553, 23.0632],
  "河源市": [114.75, 23.785],
  "惠州市": [114.395, 22.905],
  "江门市": [112.37, 21.89],
  "揭阳市": [115.86695, 22.99635],
  "茂名市": [110.8, 21.84],
  "梅州市": [116.06, 24.33],
  "清远市": [112.55255, 24.1898],
  "汕头市": [116.665, 23.2],
  "汕尾市": [115.3362, 22.87875],
  "韶关市": [113.49, 24.42],
  "深圳市": [113.905, 22.38],
  "阳江市": [111.6893, 21.84735],
  "云浮市": [111.67, 22.705],
  "湛江市": [109.99, 20.85],
  "肇庆市": [111.865, 23.355],
  "中山市": [113.275, 22.29],
  "珠海市": [113.61, 21.875],
  "百色市": [105.91, 23.79],
  "北海市": [108.98865, 20.9067],
  "崇左市": [107.465, 22.29],
  "防城港市": [107.82, 21.29],
  "贵港市": [109.75, 23.295],
  "桂林市": [110.329, 25.19265],
  "河池市": [107.715, 24.39],
  "贺州市": [111.69, 24.24],
  "来宾市": [109.26, 23.725],
  "柳州市": [109.3, 24.785],
  "南宁市": [107.98, 22.725],
  "钦州市": [108.415, 21.88],
  "梧州市": [110.79, 23.275],
  "玉林市": [109.785, 22.6],
  "安顺市": [105.735, 25.795],
  "毕节市": [104.9, 26.84],
  "贵阳市": [106.62, 26.33],
  "六盘水市": [104.8035, 25.87385],
  "黔东南苗族侗族自治州": [108.2622, 26.253],
  "黔南布依族苗族自治州": [107.15, 26.165],
  "黔西南布依族苗族自治州": [105.335, 25.245],
  "铜仁市": [108.42, 28.06],
  "遵义市": [106.71735, 27.5862],
  "白沙黎族自治县": [109.22, 18.925],
  "保亭黎族苗族自治县": [109.345, 18.38],
  "昌江黎族自治县": [108.775, 18.915],
  "澄迈县": [109.8, 19.62],
  "儋州市": [109.01, 19.315],
  "定安县": [110.505, 19.285],
  "东方市": [108.71825, 18.80755],
  "海口市": [110.245, 19.675],
  "乐东黎族自治县": [108.815, 18.41],
  "临高县": [109.415, 19.68],
  "陵水黎族自治县": [109.765, 18.345],
  "琼海市": [110.466785, 19.246011],
  "琼中黎族苗族自治县": [109.839996, 19.03557],
  "三亚市": [109.0229, 18.23305],
  "屯昌县": [109.8, 19.225],
  "万宁市": [110.388793, 18.796216],
  "文昌市": [110.753975, 19.612986],
  "五指山市": [109.516662, 18.776921],
  "保定市": [114.82365, 38.8566],
  "沧州市": [116.46, 37.93],
  "承德市": [117.345, 41.245],
  "邯郸市": [114.215, 36.32],
  "衡水市": [115.72, 37.63],
  "廊坊市": [116.605, 39.215],
  "秦皇岛市": [118.92, 39.805],
  "石家庄市": [114.25, 37.87],
  "唐山市": [118.25, 39.415],
  "邢台市": [114.505, 36.985],
  "张家口市": [114.9, 40.7],
  "安阳市": [113.985, 35.81],
  "鹤壁市": [114.02, 35.64],
  "焦作市": [113.15, 35.155],
  "开封市": [114.33785, 34.56325],
  "洛阳市": [112.265, 34.385],
  "漯河市": [113.715, 33.415],
  "南阳市": [112.035, 32.825],
  "平顶山市": [112.795, 33.64],
  "濮阳市": [115.2852, 35.66115],
  "三门峡市": [111.1133, 34.1836],
  "商丘市": [115.44, 33.975],
  "新乡市": [113.54, 35.18],
  "信阳市": [114.5, 31.25],
  "许昌市": [113.61, 33.83],
  "郑州市": [113.28, 34.37],
  "周口市": [114.72, 33.615],
  "驻马店市": [114.11, 32.765],
  "大庆市": [124.655, 46.005],
  "大兴安岭地区": [124.0587, 51.7022],
  "哈尔滨市": [127.76, 45.22],
  "鹤岗市": [130.8525, 47.6215],
  "黑河市": [126.815, 49.225],
  "鸡西市": [130.6427, 44.92835],
  "佳木斯市": [132.17, 46.92],
  "牡丹江市": [129.6, 44.415],
  "七台河市": [130.72, 45.685],
  "齐齐哈尔市": [124, 46.5],
  "双鸭山市": [132.5, 47.36],
  "绥化市": [126.44, 46.575],
  "伊春市": [128.915, 47.77],
  "鄂州市": [114.685, 30.03],
  "恩施土家族苗族自治州": [109.306, 30.15615],
  "黄冈市": [115.155, 30.425],
  "黄石市": [114.805, 29.725],
  "荆门市": [112.4, 30.84],
  "荆州市": [112.6, 30.315],
  "潜江市": [112.65, 30.215],
  "神农架林区": [110.07, 31.45],
  "十堰市": [110.225, 32.23],
  "随州市": [112.945, 31.725],
  "天门市": [112.798, 30.373],
  "武汉市": [114.23, 30.4],
  "仙桃市": [113.02, 30.18],
  "咸宁市": [114.322492, 29.841443],
  "襄阳市": [111.755, 31.75],
  "孝感市": [113.77, 30.875],
  "宜昌市": [111.095, 30.45],
  "常德市": [111.68, 29.05],
  "郴州市": [113.135, 25.515],
  "衡阳市": [111.7424, 26.67645],
  "怀化市": [109.76715, 27.26735],
  "娄底市": [111.38235, 27.6329],
  "邵阳市": [111.03, 26.49],
  "湘潭市": [112.315, 27.63],
  "湘西土家族苗族自治州": [109.665, 28.41],
  "益阳市": [111.4925, 28.449],
  "永州市": [111.635, 25.45],
  "岳阳市": [113.1372385, 28.881894],
  "张家界市": [110.3, 29],
  "长沙市": [112.84, 27.96],
  "株洲市": [113.32225, 27.0206],
  "白城市": [122.6119, 45.15785],
  "白山市": [127.44, 41.845],
  "吉林市": [126.48, 43.355],
  "辽源市": [125.0037, 42.654],
  "四平市": [124.33, 43.2],
  "松原市": [124.585, 44.455],
  "通化市": [125.77, 41.775],
  "延边朝鲜族自治州": [129.2288, 42.94945],
  "长春市": [125.615, 44.1],
  "常州市": [119.6, 31.565],
  "淮安市": [118.7415, 33.245],
  "连云港市": [118.86, 34.33],
  "南京市": [118.4643, 32.0238],
  "南通市": [120.829, 31.9175],
  "苏州市": [117.095, 33.78],
  "宿迁市": [118.09345, 33.68275],
  "泰州市": [119.8522, 32.5608],
  "无锡市": [119.855, 31.545],
  "徐州市": [117.31, 34.005],
  "盐城市": [119.905, 33.31],
  "扬州市": [119.275, 32.7],
  "镇江市": [119.08, 31.78],
  "抚州市": [116.265, 27.295],
  "赣州市": [114.96, 25.69],
  "吉安市": [114.51, 26.5791],
  "景德镇市": [116.995, 29],
  "九江市": [115.05, 29.265],
  "南昌市": [115.81, 28.605],
  "萍乡市": [113.76, 27.29],
  "上饶市": [117.21, 28.45],
  "新余市": [114.765, 27.69],
  "宜春市": [114.905, 28.195],
  "鹰潭市": [116.855, 27.88],
  "鞍山市": [122.755, 41.305],
  "本溪市": [124.4, 40.92],
  "朝阳市": [119.835, 41.235],
  "大连市": [121.945, 39.265],
  "丹东市": [124.32, 40.26],
  "抚顺市": [124.34, 41.7121],
  "阜新市": [122, 42.1],
  "葫芦岛市": [120.38, 40.56],
  "锦州市": [120.295, 39.79],
  "辽阳市": [122.875, 40.89],
  "盘锦市": [121.78, 40.83],
  "沈阳市": [123.38, 41.8],
  "铁岭市": [124.165, 42.44],
  "营口市": [122.29, 40.055],
  "阿拉善盟": [101.815, 39.855],
  "巴彦淖尔市": [107.325, 41.205],
  "包头市": [109.705, 41.29],
  "赤峰市": [118.39795, 43.20625],
  "鄂尔多斯市": [108.848, 38.9332],
  "呼和浩特市": [111.41, 40.48],
  "呼伦贝尔市": [120.675, 50.125],
  "通辽市": [121.285, 43.87],
  "乌海市": [106.755, 39.415],
  "乌兰察布市": [111.825, 41.325],
  "锡林郭勒盟": [115.795, 44.365],
  "兴安盟": [122.05, 46.08],
  "固原市": [106.28, 36.01],
  "石嘴山市": [105.985, 38.73],
  "吴忠市": [106.32, 37.245],
  "银川市": [106.01, 37.91],
  "中卫市": [105.135, 36.78],
  "果洛藏族自治州": [99.52, 33.855],
  "海北藏族自治州": [100.23015, 37.7459],
  "海东市": [101.725, 36.15],
  "海南藏族自治州": [102.025, 35.74],
  "海西蒙古族藏族自治州": [94.765, 37.1],
  "黄南藏族自治州": [101.285, 35.065],
  "西宁市": [101.77, 36.62],
  "玉树藏族自治州": [97.091934, 33.011674],
  "滨州市": [117.76, 37.285],
  "德州市": [116.405, 37.12285],
  "东营市": [118.585, 37.325],
  "菏泽市": [115.35, 34.955],
  "济南市": [116.775, 36.665],
  "济宁市": [116.3, 34.9],
  "聊城市": [115.74, 36.245],
  "临沂市": [118.175, 35.175],
  "青岛市": [120.15, 36.22],
  "日照市": [118.82, 35.54],
  "泰安市": [116.895, 35.83],
  "威海市": [121.765, 36.88],
  "潍坊市": [119.055, 36.335],
  "烟台市": [120.455, 37.195],
  "枣庄市": [116.985, 34.73],
  "淄博市": [117.81575, 36.3617],
  "大同市": [113.335, 39.735],
  "晋城市": [112.31, 35.575],
  "晋中市": [112.65, 37.23],
  "临汾市": [111.28, 35.9],
  "吕梁市": [111.205, 37.43],
  "朔州市": [112.435, 39.64],
  "太原市": [112.195, 37.76],
  "忻州市": [112.05515, 38.73025],
  "阳泉市": [113.045, 37.855],
  "运城市": [111.095, 34.92],
  "长治市": [112.515, 36.28],
  "安康市": [109.01, 32.455],
  "宝鸡市": [107.105, 34.205],
  "汉中市": [106.73475, 32.8085],
  "商洛市": [109.67725, 33.6335],
  "铜川市": [108.8212, 34.9166],
  "渭南市": [109.465, 34.825],
  "西安市": [108.445, 33.935],
  "咸阳市": [108.24, 34.715],
  "延安市": [108.86, 36.26],
  "榆林市": [109.215, 37.96],
  "上海市": [121.32, 30.965],
  "宝山区": [121.489612, 31.405457],
  "崇明区": [121.3165, 31.39075],
  "奉贤区": [121.335, 30.74],
  "虹口区": [121.2882, 31.1694],
  "黄浦区": [121.28, 31.1348],
  "嘉定区": [121.26, 31.39],
  "金山区": [121.125, 30.49],
  "静安区": [121.4444, 31.22884],
  "闵行区": [121.25, 31.5],
  "浦东新区": [121.53, 31.22],
  "普陀区": [121.39, 31.25],
  "青浦区": [120.85, 30.875],
  "松江区": [121.45, 31],
  "徐汇区": [120.26, 31.12],
  "杨浦区": [121.52, 31.27],
  "长宁区": [121.22685, 31.12445],
  "阿坝藏族羌族自治州": [102.35, 32.07],
  "巴中市": [106.845, 31.8],
  "成都市": [103.535, 30.655],
  "达州市": [107.3578, 31.19775],
  "德阳市": [104.3, 30.865],
  "甘孜藏族自治州": [99.755, 30.89],
  "广安市": [106.375, 30.265],
  "广元市": [105.405, 31.935],
  "乐山市": [103.4, 29.225],
  "凉山彝族自治州": [101.775, 27.605],
  "泸州市": [105.68, 28.295],
  "眉山市": [103.395, 29.7],
  "绵阳市": [104.44, 31.725],
  "南充市": [105.925, 30.93],
  "内江市": [104.705, 29.565],
  "攀枝花市": [101.615, 26.63],
  "遂宁市": [105.81375, 30.605],
  "雅安市": [102.3977, 29.5375],
  "宜宾市": [104.28, 28.33],
  "资阳市": [104.74, 29.66],
  "自贡市": [104.5934, 28.9681],
  "台湾省": [121.520076, 25.030724],
  "天津市": [117.235, 39.245],
  "宝坻区": [117.24, 39.355],
  "北辰区": [116.9, 39.155],
  "东丽区": [117.23, 39.07],
  "和平区": [123.22265, 41.44835],
  "河北区": [116.765, 38.71],
  "河东区": [117.1454, 39.0657],
  "河西区": [117.22327, 39.10959],
  "红桥区": [117.0845, 39.0956],
  "蓟州区": [117.26, 35.3],
  "津南区": [117.2371, 38.7717],
  "静海区": [116.7715, 38.69725],
  "南开区": [117.0862, 39.0569],
  "宁河区": [117.33855, 39.2164],
  "武清区": [116.8301, 39.24625],
  "西青区": [116.855, 39.01],
  "阿里地区": [82.22, 32.465],
  "昌都市": [96.04, 30.055],
  "拉萨市": [91.06, 29.36],
  "林芝市": [95.28, 28.46],
  "那曲市": [89.3, 32.925],
  "日喀则市": [86.105, 29.31],
  "山南市": [92.18, 28.275],
  "香港特别行政区": [114.15, 22.15],
  "北区": [114.148959, 22.494086],
  "大埔区": [114.171743, 22.445653],
  "东区": [114.255993, 22.262755],
  "观塘区": [114.231268, 22.30943],
  "黄大仙区": [114.19924, 22.336313],
  "九龙城区": [114.195053, 22.32673],
  "葵青区": [114.13932, 22.363877],
  "离岛区": [113.945842, 22.281508],
  "南区": [114.174134, 22.24676],
  "荃湾区": [114.122952, 22.370973],
  "沙田区": [114.191941, 22.379294],
  "深水埗区": [114.16721, 22.328171],
  "屯门区": [113.977416, 22.391047],
  "湾仔区": [114.182915, 22.276389],
  "西贡区": [114.27854, 22.37944],
  "油尖旺区": [114.173332, 22.311704],
  "元朗区": [114.039796, 22.443342],
  "中西区": [114.154374, 22.281981],
  "阿克苏地区": [81.05, 40.855],
  "阿拉尔市": [80.94, 40.395],
  "阿勒泰地区": [88.17795, 47.05225],
  "巴音郭楞蒙古自治州": [87.915, 39.37],
  "博尔塔拉蒙古自治州": [81.53, 44.625],
  "昌吉回族自治州": [88.245, 44.1],
  "哈密市": [93.44, 42.78],
  "和田地区": [79.92, 37.12],
  "喀什地区": [75.455, 37.72],
  "克拉玛依市": [85.225, 45.075],
  "克孜勒苏柯尔克孜自治州": [75.92535, 39.45345],
  "石河子市": [85.41, 44.23],
  "塔城地区": [84.685, 45.2],
  "图木舒克市": [79.077978, 39.867316],
  "吐鲁番市": [89.355, 42.26],
  "乌鲁木齐市": [87.47785, 43.7266],
  "五家渠市": [87.30285, 43.99125],
  "伊犁哈萨克自治州": [85.55435, 44.62305],
  "保山市": [99.135, 24.795],
  "楚雄彝族自治州": [101.375, 25.215],
  "大理白族自治州": [99.775, 25.415],
  "德宏傣族景颇族自治州": [97.87, 24.35],
  "迪庆藏族自治州": [99.706463, 27.826853],
  "红河哈尼族彝族自治州": [102.815, 23.355],
  "昆明市": [102.75, 25.225],
  "丽江市": [100.25, 26.86],
  "临沧市": [99.36, 24.04],
  "怒江傈僳族自治州": [98.74, 26.78],
  "普洱市": [100.64, 23.26],
  "曲靖市": [103.765, 25.61],
  "文山壮族苗族自治州": [104.735, 23.44],
  "西双版纳傣族自治州": [100.525, 21.75],
  "玉溪市": [102.125, 23.86],
  "昭通市": [103.855, 27.455],
  "杭州市": [119.285, 29.725],
  "湖州市": [119.715, 30.665],
  "嘉兴市": [120.67, 30.615],
  "金华市": [119.8015, 28.865],
  "丽水市": [119.335, 27.91],
  "宁波市": [121.355, 29.42],
  "衢州市": [118.605, 28.72],
  "绍兴市": [120.33205, 29.65325],
  "台州市": [120.865, 28.605],
  "温州市": [120.275, 27.695],
  "舟山市": [122.275, 30.18]
};
function useEchartsMap(chart) {
  const screenEditStore = useScreenEditStore();
  watch(
    () => screenEditStore == null ? void 0 : screenEditStore.getTheme,
    (val) => {
      if (!chart) {
        return;
      }
      nextTick().then(() => {
        changeTheme(chart, val);
      });
    },
    { immediate: true }
  );
  function changeTheme(geo, theme) {
    const colors = {
      dark: "#03133D",
      light: "#E9F2FA"
    };
    const borderColors = {
      dark: "#6699FF",
      light: "#4486C1"
    };
    const shadowColors = {
      dark: "#1773C3",
      light: "#FFFFFF"
    };
    const hoverColors = {
      dark: "#3146B3",
      light: "#6699FF"
    };
    if (!geo.itemStyle) {
      geo.itemStyle = cloneDeep({
        color: colors[theme],
        borderColor: borderColors[theme],
        shadowColor: shadowColors[theme],
        shadowBlur: 10,
        borderWidth: 1
      });
      geo.emphasis = cloneDeep({
        itemStyle: {
          color: hoverColors[theme]
        }
      });
      return;
    }
    if (geo.itemStyle.color === colors.dark || geo.itemStyle.color === colors.light) {
      geo.itemStyle.color = colors[theme];
    }
    if (geo.itemStyle.borderColor === borderColors.dark || geo.itemStyle.borderColor === borderColors.light) {
      geo.itemStyle.borderColor = borderColors[theme];
    }
    if (geo.itemStyle.shadowColor === shadowColors.dark || geo.itemStyle.shadowColor === shadowColors.light) {
      geo.itemStyle.shadowColor = shadowColors[theme];
    }
    if (geo.emphasis.itemStyle.color === hoverColors.dark || geo.emphasis.itemStyle.color === hoverColors.light) {
      geo.emphasis.itemStyle.color = hoverColors[theme];
    }
  }
}
export {
  geoCoordinate as g,
  useEchartsMap as u
};
