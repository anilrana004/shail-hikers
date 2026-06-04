import { H as o, j as reactExports, t as jsxRuntimeExports, A as AnimatePresence, w as motion, J as useQueryClient, K as useActor, N as useQuery, O as createActor, P as useParams, L as Link } from "./index-BbOSvcvx.js";
import { u as useChartWidth, b as useChartHeight, c as useOffset, i as isNumber, d as useArbitraryXAxis, e as useYAxisWithFiniteDomainOrRandom, f as isFunction, w as warn, g as getCoordinatesOfGrid, h as getTicks, j as getTicksOfAxis, C as CartesianAxis, k as filterProps, l as generateCategoricalChart, B as Bar, X as XAxis, Y as YAxis, m as formatAxisMap, R as ResponsiveContainer, A as AreaChart, T as Tooltip, a as Area } from "./AreaChart-B8sAc90l.js";
import { u as useMutation } from "./useMutation-q7sJbHiJ.js";
import { T as TREKS } from "./treks-CGIURMuU.js";
import "./clsx-DgYk2OaC.js";
var _excluded = ["x1", "y1", "x2", "y2", "key"], _excluded2 = ["offset"];
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var Background = function Background2(props) {
  var fill = props.fill;
  if (!fill || fill === "none") {
    return null;
  }
  var fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, ry = props.ry;
  return /* @__PURE__ */ o.createElement("rect", {
    x,
    y,
    ry,
    width,
    height,
    stroke: "none",
    fill,
    fillOpacity,
    className: "recharts-cartesian-grid-bg"
  });
};
function renderLineItem(option, props) {
  var lineItem;
  if (/* @__PURE__ */ o.isValidElement(option)) {
    lineItem = /* @__PURE__ */ o.cloneElement(option, props);
  } else if (isFunction(option)) {
    lineItem = option(props);
  } else {
    var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, key = props.key, others = _objectWithoutProperties(props, _excluded);
    var _filterProps = filterProps(others, false);
    _filterProps.offset;
    var restOfFilteredProps = _objectWithoutProperties(_filterProps, _excluded2);
    lineItem = /* @__PURE__ */ o.createElement("line", _extends({}, restOfFilteredProps, {
      x1,
      y1,
      x2,
      y2,
      fill: "none",
      key
    }));
  }
  return lineItem;
}
function HorizontalGridLines(props) {
  var x = props.x, width = props.width, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? true : _props$horizontal, horizontalPoints = props.horizontalPoints;
  if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
    return null;
  }
  var items = horizontalPoints.map(function(entry, i) {
    var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
      x1: x,
      y1: entry,
      x2: x + width,
      y2: entry,
      key: "line-".concat(i),
      index: i
    });
    return renderLineItem(horizontal, lineItemProps);
  });
  return /* @__PURE__ */ o.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, items);
}
function VerticalGridLines(props) {
  var y = props.y, height = props.height, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? true : _props$vertical, verticalPoints = props.verticalPoints;
  if (!vertical || !verticalPoints || !verticalPoints.length) {
    return null;
  }
  var items = verticalPoints.map(function(entry, i) {
    var lineItemProps = _objectSpread(_objectSpread({}, props), {}, {
      x1: entry,
      y1: y,
      x2: entry,
      y2: y + height,
      key: "line-".concat(i),
      index: i
    });
    return renderLineItem(vertical, lineItemProps);
  });
  return /* @__PURE__ */ o.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, items);
}
function HorizontalStripes(props) {
  var horizontalFill = props.horizontalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, horizontalPoints = props.horizontalPoints, _props$horizontal2 = props.horizontal, horizontal = _props$horizontal2 === void 0 ? true : _props$horizontal2;
  if (!horizontal || !horizontalFill || !horizontalFill.length) {
    return null;
  }
  var roundedSortedHorizontalPoints = horizontalPoints.map(function(e) {
    return Math.round(e + y - y);
  }).sort(function(a, b) {
    return a - b;
  });
  if (y !== roundedSortedHorizontalPoints[0]) {
    roundedSortedHorizontalPoints.unshift(0);
  }
  var items = roundedSortedHorizontalPoints.map(function(entry, i) {
    var lastStripe = !roundedSortedHorizontalPoints[i + 1];
    var lineHeight = lastStripe ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
    if (lineHeight <= 0) {
      return null;
    }
    var colorIndex = i % horizontalFill.length;
    return /* @__PURE__ */ o.createElement("rect", {
      key: "react-".concat(i),
      y: entry,
      x,
      height: lineHeight,
      width,
      stroke: "none",
      fill: horizontalFill[colorIndex],
      fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ o.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, items);
}
function VerticalStripes(props) {
  var _props$vertical2 = props.vertical, vertical = _props$vertical2 === void 0 ? true : _props$vertical2, verticalFill = props.verticalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, verticalPoints = props.verticalPoints;
  if (!vertical || !verticalFill || !verticalFill.length) {
    return null;
  }
  var roundedSortedVerticalPoints = verticalPoints.map(function(e) {
    return Math.round(e + x - x);
  }).sort(function(a, b) {
    return a - b;
  });
  if (x !== roundedSortedVerticalPoints[0]) {
    roundedSortedVerticalPoints.unshift(0);
  }
  var items = roundedSortedVerticalPoints.map(function(entry, i) {
    var lastStripe = !roundedSortedVerticalPoints[i + 1];
    var lineWidth = lastStripe ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
    if (lineWidth <= 0) {
      return null;
    }
    var colorIndex = i % verticalFill.length;
    return /* @__PURE__ */ o.createElement("rect", {
      key: "react-".concat(i),
      x: entry,
      y,
      width: lineWidth,
      height,
      stroke: "none",
      fill: verticalFill[colorIndex],
      fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ o.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, items);
}
var defaultVerticalCoordinatesGenerator = function defaultVerticalCoordinatesGenerator2(_ref, syncWithTicks) {
  var xAxis = _ref.xAxis, width = _ref.width, height = _ref.height, offset = _ref.offset;
  return getCoordinatesOfGrid(getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), xAxis), {}, {
    ticks: getTicksOfAxis(xAxis, true),
    viewBox: {
      x: 0,
      y: 0,
      width,
      height
    }
  })), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = function defaultHorizontalCoordinatesGenerator2(_ref2, syncWithTicks) {
  var yAxis = _ref2.yAxis, width = _ref2.width, height = _ref2.height, offset = _ref2.offset;
  return getCoordinatesOfGrid(getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), yAxis), {}, {
    ticks: getTicksOfAxis(yAxis, true),
    viewBox: {
      x: 0,
      y: 0,
      width,
      height
    }
  })), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
  horizontal: true,
  vertical: true,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function CartesianGrid(props) {
  var _props$stroke, _props$fill, _props$horizontal3, _props$horizontalFill, _props$vertical3, _props$verticalFill;
  var chartWidth = useChartWidth();
  var chartHeight = useChartHeight();
  var offset = useOffset();
  var propsIncludingDefaults = _objectSpread(_objectSpread({}, props), {}, {
    stroke: (_props$stroke = props.stroke) !== null && _props$stroke !== void 0 ? _props$stroke : defaultProps.stroke,
    fill: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : defaultProps.fill,
    horizontal: (_props$horizontal3 = props.horizontal) !== null && _props$horizontal3 !== void 0 ? _props$horizontal3 : defaultProps.horizontal,
    horizontalFill: (_props$horizontalFill = props.horizontalFill) !== null && _props$horizontalFill !== void 0 ? _props$horizontalFill : defaultProps.horizontalFill,
    vertical: (_props$vertical3 = props.vertical) !== null && _props$vertical3 !== void 0 ? _props$vertical3 : defaultProps.vertical,
    verticalFill: (_props$verticalFill = props.verticalFill) !== null && _props$verticalFill !== void 0 ? _props$verticalFill : defaultProps.verticalFill,
    x: isNumber(props.x) ? props.x : offset.left,
    y: isNumber(props.y) ? props.y : offset.top,
    width: isNumber(props.width) ? props.width : offset.width,
    height: isNumber(props.height) ? props.height : offset.height
  });
  var x = propsIncludingDefaults.x, y = propsIncludingDefaults.y, width = propsIncludingDefaults.width, height = propsIncludingDefaults.height, syncWithTicks = propsIncludingDefaults.syncWithTicks, horizontalValues = propsIncludingDefaults.horizontalValues, verticalValues = propsIncludingDefaults.verticalValues;
  var xAxis = useArbitraryXAxis();
  var yAxis = useYAxisWithFiniteDomainOrRandom();
  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 || !isNumber(x) || x !== +x || !isNumber(y) || y !== +y) {
    return null;
  }
  var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
  var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
  var horizontalPoints = propsIncludingDefaults.horizontalPoints, verticalPoints = propsIncludingDefaults.verticalPoints;
  if ((!horizontalPoints || !horizontalPoints.length) && isFunction(horizontalCoordinatesGenerator)) {
    var isHorizontalValues = horizontalValues && horizontalValues.length;
    var generatorResult = horizontalCoordinatesGenerator({
      yAxis: yAxis ? _objectSpread(_objectSpread({}, yAxis), {}, {
        ticks: isHorizontalValues ? horizontalValues : yAxis.ticks
      }) : void 0,
      width: chartWidth,
      height: chartHeight,
      offset
    }, isHorizontalValues ? true : syncWithTicks);
    warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(generatorResult), "]"));
    if (Array.isArray(generatorResult)) {
      horizontalPoints = generatorResult;
    }
  }
  if ((!verticalPoints || !verticalPoints.length) && isFunction(verticalCoordinatesGenerator)) {
    var isVerticalValues = verticalValues && verticalValues.length;
    var _generatorResult = verticalCoordinatesGenerator({
      xAxis: xAxis ? _objectSpread(_objectSpread({}, xAxis), {}, {
        ticks: isVerticalValues ? verticalValues : xAxis.ticks
      }) : void 0,
      width: chartWidth,
      height: chartHeight,
      offset
    }, isVerticalValues ? true : syncWithTicks);
    warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(_generatorResult), "]"));
    if (Array.isArray(_generatorResult)) {
      verticalPoints = _generatorResult;
    }
  }
  return /* @__PURE__ */ o.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ o.createElement(Background, {
    fill: propsIncludingDefaults.fill,
    fillOpacity: propsIncludingDefaults.fillOpacity,
    x: propsIncludingDefaults.x,
    y: propsIncludingDefaults.y,
    width: propsIncludingDefaults.width,
    height: propsIncludingDefaults.height,
    ry: propsIncludingDefaults.ry
  }), /* @__PURE__ */ o.createElement(HorizontalGridLines, _extends({}, propsIncludingDefaults, {
    offset,
    horizontalPoints,
    xAxis,
    yAxis
  })), /* @__PURE__ */ o.createElement(VerticalGridLines, _extends({}, propsIncludingDefaults, {
    offset,
    verticalPoints,
    xAxis,
    yAxis
  })), /* @__PURE__ */ o.createElement(HorizontalStripes, _extends({}, propsIncludingDefaults, {
    horizontalPoints
  })), /* @__PURE__ */ o.createElement(VerticalStripes, _extends({}, propsIncludingDefaults, {
    verticalPoints
  })));
}
CartesianGrid.displayName = "CartesianGrid";
var BarChart = generateCategoricalChart({
  chartName: "BarChart",
  GraphicalChild: Bar,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
function TrekSidebar({ trek }) {
  const [groupSize, setGroupSize] = reactExports.useState(2);
  const [addPorter, setAddPorter] = reactExports.useState(false);
  const [addInsurance, setAddInsurance] = reactExports.useState(false);
  const basePrice = groupSize === 1 ? Math.round(trek.basePrice * 1.15) : groupSize >= 9 ? Math.round(trek.basePrice * 0.9) : groupSize >= 5 ? Math.round(trek.basePrice * 0.95) : trek.basePrice;
  const extras = (addPorter ? 800 * trek.durationDays : 0) + (addInsurance ? 299 : 0);
  const total = (basePrice + extras) * groupSize;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "sticky top-24 rounded-2xl border p-6 space-y-5",
      style: { background: "rgba(255,255,255,0.95)", borderColor: "#4A4A4A33" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Starting from" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold", style: { color: "#D4A843" }, children: [
            "Rs.",
            trek.basePrice.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: "per person" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-3",
            style: {
              background: "rgba(248,131,121,0.15)",
              border: "1px solid #F8837944"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Next batch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", style: { color: "#1A1A1A" }, children: "Jan 15, 2025" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-xs",
                  style: {
                    color: trek.seatsAvailable && trek.seatsAvailable <= 3 ? "#F88379" : "#4A7C2F"
                  },
                  children: [
                    trek.seatsAvailable,
                    " seats remaining"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mb-2", style: { color: "#4A4A4A" }, children: [
            "Group Size: ",
            groupSize
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 1,
              max: 20,
              value: groupSize,
              onChange: (e) => setGroupSize(Number(e.target.value)),
              className: "w-full accent-[#F88379]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: addPorter,
                onChange: (e) => setAddPorter(e.target.checked),
                className: "accent-[#F88379]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#1A1A1A" }, children: "Porter hire (+Rs.800/day)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: addInsurance,
                onChange: (e) => setAddInsurance(e.target.checked),
                className: "accent-[#F88379]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#1A1A1A" }, children: "Insurance upgrade (+Rs.299)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-3",
            style: { background: "rgba(255,255,255,0.9)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
                  "Rs.",
                  (basePrice + extras).toLocaleString(),
                  " x ",
                  groupSize
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#1A1A1A" }, children: [
                  "Rs.",
                  total.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: "Incl. taxes & permits" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `/book/${trek.slug}`,
            "data-ocid": "trek.book_now_button",
            className: "block w-full text-center py-3.5 rounded-xl font-semibold",
            style: { background: "#F88379", color: "#1A1A1A" },
            children: "Book Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://wa.me/918279888470",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block w-full text-center py-3 rounded-xl text-sm border",
            style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
            children: "WhatsApp Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 p-3 rounded-xl",
            style: { background: "rgba(255,255,255,0.8)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center",
                  style: { background: "#F88379" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: "D" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: "Your Guide" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", style: { color: "#1A1A1A" }, children: "Deepak Singh" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#D4A843" }, children: "4.9 / 5 from 142 treks" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const FAQ_CATEGORIES = [
  "All",
  "Logistics",
  "Fitness",
  "Gear",
  "Weather",
  "Safety",
  "Booking"
];
function TrekFAQsTab({ trek }) {
  const [open, setOpen] = reactExports.useState(null);
  const [catFilter, setCatFilter] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const [helpful, setHelpful] = reactExports.useState({});
  const [showAskModal, setShowAskModal] = reactExports.useState(false);
  const [askQuestion, setAskQuestion] = reactExports.useState("");
  const filtered = trek.faqs.filter((faq) => {
    const matchesCat = catFilter === "All" || faq.category === catFilter;
    const matchesSearch = search === "" || faq.question.toLowerCase().includes(search.toLowerCase()) || faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setShowAskModal(true),
          className: "text-sm px-4 py-2 rounded-xl border",
          style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
          children: "Ask a Question"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search FAQs...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        className: "w-full px-5 py-3 rounded-xl border bg-transparent text-sm",
        style: { borderColor: "#4A4A4A44", color: "#1A1A1A" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: FAQ_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setCatFilter(cat),
        className: "text-xs px-3 py-1.5 rounded-full",
        style: {
          background: catFilter === cat ? "#F88379" : "rgba(255,255,255,0.9)",
          color: "#1A1A1A",
          border: `1px solid ${catFilter === cat ? "#F88379" : "#4A4A4A33"}`
        },
        children: cat
      },
      cat
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      filtered.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border",
          style: { borderColor: open === i ? "#F8837966" : "#4A4A4A22" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpen(open === i ? null : i),
                className: "w-full flex items-center gap-4 px-5 py-4 text-left",
                style: {
                  background: open === i ? "rgba(248,131,121,0.08)" : "rgba(255,255,255,0.9)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "font-medium text-sm",
                        style: { color: "#1A1A1A" },
                        children: faq.question
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-xs mt-0.5 px-2 py-0.5 rounded-full inline-block",
                        style: {
                          background: "rgba(255,255,255,0.9)",
                          color: "#4A4A4A",
                          border: "1px solid #4A4A4A33"
                        },
                        children: faq.category
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#F88379" }, children: open === i ? "-" : "+" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.25 },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-5 py-4",
                    style: { background: "rgba(255,255,255,0.8)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-sm leading-relaxed mb-4",
                          style: { color: "#1A1A1A" },
                          children: faq.answer
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "#4A4A4A" }, children: "Was this helpful?" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setHelpful((h) => ({ ...h, [i]: true })),
                            className: "text-lg",
                            style: {
                              color: helpful[i] === true ? "#2D6A4F" : "#4A4A4A"
                            },
                            children: "👍"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setHelpful((h) => ({ ...h, [i]: false })),
                            className: "text-lg",
                            style: {
                              color: helpful[i] === false ? "#F88379" : "#4A4A4A"
                            },
                            children: "👎"
                          }
                        )
                      ] })
                    ]
                  }
                )
              }
            ) })
          ]
        },
        faq.question
      )),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12", style: { color: "#4A4A4A" }, children: "No FAQs found matching your search." })
    ] }),
    showAskModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: { background: "rgba(255,255,255,0.95)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-8 w-full max-w-lg",
            style: { background: "#FFFFFF" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-2xl",
                    style: { color: "#1A1A1A" },
                    children: "Ask a Question"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowAskModal(false),
                    style: { color: "#4A4A4A" },
                    children: "✕"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: askQuestion,
                  onChange: (e) => setAskQuestion(e.target.value),
                  placeholder: "What would you like to know about this trek?",
                  rows: 4,
                  className: "w-full px-4 py-3 rounded-xl border bg-transparent text-sm mb-4 resize-none",
                  style: { borderColor: "#4A4A4A44", color: "#1A1A1A" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "w-full py-3 rounded-xl font-semibold text-sm",
                  style: { background: "#F88379", color: "#1A1A1A" },
                  onClick: () => {
                    setShowAskModal(false);
                    setAskQuestion("");
                  },
                  children: "Submit Question"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
const RECOMMENDED_GEAR = [
  { name: "Trekking poles (telescopic)", essential: false },
  { name: "Gaiters (snow treks)", essential: false },
  { name: "Hand warmers (winter treks)", essential: false },
  { name: "Power bank 10,000 mAh+", essential: false },
  { name: "Camera / GoPro", essential: false },
  { name: "Zip-lock bags for waterproofing", essential: false },
  { name: "Trekking umbrella (monsoon)", essential: false },
  { name: "Collapsible water filter", essential: false }
];
function TrekGearTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Mandatory Gear" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", children: trek.gearList.mandatory.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between rounded-xl px-4 py-3 border",
          style: {
            background: "rgba(248,131,121,0.1)",
            borderColor: "#F8837944"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-sm font-medium",
                  style: { color: "#1A1A1A" },
                  children: item.name
                }
              ),
              item.weightNote && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: item.weightNote })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs px-2 py-0.5 rounded-full ml-3 flex-shrink-0",
                style: {
                  background: item.essential ? "#F88379" : "rgba(255,255,255,0.9)",
                  color: item.essential ? "#1A1A1A" : "#4A4A4A"
                },
                children: item.essential ? "Essential" : "Optional"
              }
            )
          ]
        },
        item.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Recommended Gear" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", children: RECOMMENDED_GEAR.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 rounded-xl px-4 py-3 border",
          style: {
            background: "rgba(45,27,30,0.6)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: item.name })
          ]
        },
        item.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Gear Rental at Base Camp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden border",
          style: { borderColor: "#4A4A4A33" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { background: "rgba(248,131,121,0.2)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-5 py-3 text-left",
                  style: { color: "#1A1A1A" },
                  children: "Item"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-5 py-3 text-right",
                  style: { color: "#1A1A1A" },
                  children: "Rate/Day"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: trek.gearList.rental.map((item) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  style: {
                    background: item.name === ((_a = trek.gearList.rental[0]) == null ? void 0 : _a.name) || trek.gearList.rental.indexOf(item) % 2 === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.9)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", style: { color: "#1A1A1A" }, children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "td",
                      {
                        className: "px-5 py-3 text-right font-semibold",
                        style: { color: "#D4A843" },
                        children: [
                          "Rs.",
                          item.pricePerDay,
                          "/day"
                        ]
                      }
                    )
                  ]
                },
                item.name
              );
            }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `/book/${trek.slug}`,
          className: "inline-block px-6 py-3 rounded-xl text-sm font-semibold",
          style: {
            background: "rgba(248,131,121,0.2)",
            color: "#F88379",
            border: "1px solid #F8837966"
          },
          children: "Add Gear Rental to Booking"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Gear Weight Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-lg font-semibold mb-2",
                style: { color: "#1A1A1A" },
                children: "Target Backpack Weight: 8-12 kg"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mb-6", style: { color: "#4A4A4A" }, children: "Excluding water. Your physical comfort depends on keeping weight in this range." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-semibold text-sm mb-3",
                    style: { color: "#1A1A1A" },
                    children: "Shail Hikers Carries"
                  }
                ),
                [
                  "Tents (shared): 3 kg",
                  "Kitchen equipment: 8 kg",
                  "First aid kit: 2 kg",
                  "Common food stores: 5 kg"
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-sm mb-2",
                    style: { color: "#4A4A4A" },
                    children: [
                      "• ",
                      item
                    ]
                  },
                  item
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-semibold text-sm mb-3",
                    style: { color: "#1A1A1A" },
                    children: "You Carry"
                  }
                ),
                [
                  "Personal clothing: 3-4 kg",
                  "Personal food/snacks: 1-2 kg",
                  "Camera/electronics: 1 kg",
                  "Water (2L): 2 kg",
                  "Misc personal: 1-2 kg"
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-sm mb-2",
                    style: { color: "#4A4A4A" },
                    children: [
                      "• ",
                      item
                    ]
                  },
                  item
                ))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mt-4 text-xs px-4 py-3 rounded-xl",
                style: {
                  background: "rgba(248,131,121,0.1)",
                  color: "#1A1A1A",
                  borderLeft: "3px solid #F88379"
                },
                children: "Weight Savings Tip: Choose merino wool over cotton. It weighs less, dries faster, and resists odour on multi-day treks."
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const INCLUSIONS = [
  "Transport: Pickup from Dehradun ISBT & drop back",
  "Accommodation: High-quality dome tents (2-person per tent)",
  "Sleeping bag rated to -10C + sleeping mat",
  "All meals from Day 1 dinner to last day breakfast",
  "Purified drinking water at all camps",
  "Experienced Trek Leader (1 per group)",
  "Certified Mountain Guide (1 per 8 trekkers)",
  "Cook + Kitchen Staff",
  "Support Staff & porters for common kitchen equipment",
  "First Aid Kit: Gamow bag, pulse oximeter, oxygen cylinder",
  "Trekking poles (on request)",
  "All forest/wildlife sanctuary entry permits & fees",
  "Camping fees and zone permits",
  "Safety equipment: rope, harness, crampons where required",
  "Group insurance: Rs.10L per person medical + evacuation",
  "Certificate of completion (digital + physical)",
  "Trek briefing session evening before Day 1",
  "GPS tracking device (location shared with base team)",
  "Emergency evacuation support",
  "24/7 on-trail emergency helpline"
];
const EXCLUSIONS = [
  "Personal travel insurance (strongly recommended)",
  "Personal expenses: tips, laundry, phone charging",
  "Porter charges for personal luggage (add-on Rs.800/day)",
  "Costs from medical emergency beyond base camp evacuation",
  "Meals on Day 1 lunch / last day lunch",
  "Accommodation before Day 1 and after last day",
  "Extra nights due to weather or personal reasons",
  "Alcoholic beverages",
  "Personal medication",
  "Helicopter evacuation (covered only under upgraded insurance)",
  "Any activity not mentioned in the itinerary"
];
const SHAIL_PROVIDES = [
  "Dome tents (2-person)",
  "Sleeping bag (-10C)",
  "Sleeping mat",
  "Trekking poles (on request)",
  "Kitchen equipment",
  "First aid & oxygen kit",
  "Gamow bag",
  "Rope & safety gear"
];
const YOU_BRING = [
  "Personal trekking clothing",
  "Trekking shoes (ankle support)",
  "Personal backpack (40-50L)",
  "Personal toiletries",
  "Personal snacks",
  "Personal medication",
  "Identity proof",
  "Camera / phone"
];
function TrekInclusionsTab({ trek: _trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display text-2xl mb-5",
            style: { color: "#1A1A1A" },
            children: "What's Included"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: INCLUSIONS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-3 rounded-xl px-4 py-3",
            style: { background: "rgba(45,80,22,0.15)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 flex-shrink-0", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#1A1A1A" }, children: item })
            ]
          },
          item
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display text-2xl mb-5",
            style: { color: "#1A1A1A" },
            children: "What's Excluded"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: EXCLUSIONS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-3 rounded-xl px-4 py-3",
            style: { background: "rgba(248,131,121,0.1)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 flex-shrink-0", children: "✗" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#1A1A1A" }, children: item })
            ]
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Gear: What We Provide vs What You Carry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden border",
            style: { borderColor: "#2D6A4F" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-5 py-3",
                  style: { background: "rgba(45,80,22,0.3)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: "Shail Hikers Provides" })
                }
              ),
              SHAIL_PROVIDES.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 px-5 py-2 text-sm",
                  style: {
                    background: idx % 2 === 0 ? "rgba(45,80,22,0.1)" : "transparent",
                    color: "#1A1A1A"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#2D6A4F" }, children: "✓" }),
                    " ",
                    item
                  ]
                },
                item
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden border",
            style: { borderColor: "#4A4A4A33" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-5 py-3",
                  style: { background: "rgba(255,255,255,0.9)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: "You Must Bring" })
                }
              ),
              YOU_BRING.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 px-5 py-2 text-sm",
                  style: {
                    background: idx % 2 === 0 ? "rgba(45,27,30,0.4)" : "transparent",
                    color: "#1A1A1A"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "→" }),
                    " ",
                    item
                  ]
                },
                item
              ))
            ]
          }
        )
      ] })
    ] })
  ] });
}
function TrekItineraryTab({ trek }) {
  const [openDay, setOpenDay] = reactExports.useState(0);
  const [viewMode, setViewMode] = reactExports.useState(
    "accordion"
  );
  const TRAIL_COLORS = {
    Forest: "#2D6A4F",
    Meadow: "#4A7C2F",
    Snow: "#82C8E5",
    Rocky: "#8B7355",
    "River Crossing": "#4A9ECC",
    Village: "#D4A843"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: "Day-by-Day Itinerary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setOpenDay(0),
            className: "text-xs px-3 py-1.5 rounded-lg border",
            style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
            children: "Expand All"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setOpenDay(null),
            className: "text-xs px-3 py-1.5 rounded-lg border",
            style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
            children: "Collapse All"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setViewMode(viewMode === "accordion" ? "timeline" : "accordion"),
            className: "text-xs px-3 py-1.5 rounded-lg",
            style: { background: "#F88379", color: "#1A1A1A" },
            children: viewMode === "accordion" ? "Timeline View" : "Accordion View"
          }
        )
      ] })
    ] }),
    viewMode === "accordion" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: trek.itinerary.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl overflow-hidden border",
        style: { borderColor: openDay === i ? "#F8837966" : "#4A4A4A22" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setOpenDay(openDay === i ? null : i),
              className: "w-full flex items-center gap-4 px-6 py-5 text-left",
              style: {
                background: openDay === i ? "rgba(248,131,121,0.12)" : "rgba(255,255,255,0.9)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0",
                    style: { background: "#F88379", color: "#1A1A1A" },
                    children: [
                      "Day ",
                      day.dayNum
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: day.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", style: { color: "#4A4A4A" }, children: [
                    day.distance,
                    " km / ",
                    day.walkingHours,
                    "h /",
                    " ",
                    day.altitudeStart.toLocaleString(),
                    "-",
                    day.altitudeEnd.toLocaleString(),
                    " ft"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", style: { color: "#F88379" }, children: openDay === i ? "^" : "v" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openDay === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-6 py-6 space-y-5",
                  style: { background: "rgba(255,255,255,0.95)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                      ["Distance", `${day.distance} km`],
                      ["Walking Time", `${day.walkingHours}h`],
                      [
                        "Altitude",
                        `${day.altitudeStart.toLocaleString()}-${day.altitudeEnd.toLocaleString()} ft`
                      ],
                      [
                        "Net Change",
                        `${day.altitudeEnd > day.altitudeStart ? "+" : ""}${(day.altitudeEnd - day.altitudeStart).toLocaleString()} ft`
                      ]
                    ].map(([label, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-lg p-3 text-center",
                        style: { background: "rgba(255,255,255,0.9)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs mb-1",
                              style: { color: "#4A4A4A" },
                              children: label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-sm font-semibold",
                              style: { color: "#1A1A1A" },
                              children: val
                            }
                          )
                        ]
                      },
                      label
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-xs mb-2",
                          style: { color: "#4A4A4A" },
                          children: "Altitude Change"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "flex-1 h-3 rounded-full",
                            style: { background: "rgba(255,255,255,0.9)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "h-3 rounded-full",
                                style: {
                                  background: day.altitudeEnd >= day.altitudeStart ? "#F88379" : "#82C8E5",
                                  width: `${Math.min(100, Math.abs(day.altitudeEnd - day.altitudeStart) / 100)}%`
                                }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs",
                            style: {
                              color: day.altitudeEnd >= day.altitudeStart ? "#F88379" : "#82C8E5"
                            },
                            children: day.altitudeEnd >= day.altitudeStart ? "Ascent" : "Descent"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-sm leading-relaxed",
                        style: { color: "#4A4A4A" },
                        children: day.description
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                      day.trailTypes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-3 py-1 rounded-full",
                          style: {
                            background: `${TRAIL_COLORS[t] || "#555"}33`,
                            color: TRAIL_COLORS[t] || "#1A1A1A",
                            border: `1px solid ${TRAIL_COLORS[t] || "#555"}66`
                          },
                          children: t
                        },
                        t
                      )),
                      day.difficultyPill && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-3 py-1 rounded-full",
                          style: {
                            background: "rgba(248,131,121,0.2)",
                            color: "#F88379",
                            border: "1px solid #F8837966"
                          },
                          children: day.difficultyPill
                        }
                      )
                    ] }),
                    day.waypoints && day.waypoints.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-xs font-semibold mb-2",
                          style: { color: "#4A4A4A" },
                          children: "Trail Waypoints"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: day.waypoints.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-xs px-2 py-1 rounded",
                          style: {
                            background: "rgba(255,255,255,0.9)",
                            color: "#1A1A1A"
                          },
                          children: [
                            "pin ",
                            w
                          ]
                        },
                        w
                      )) })
                    ] }),
                    day.campsiteInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-xl p-4",
                        style: { background: "rgba(45,27,30,0.6)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs font-semibold mb-1",
                              style: { color: "#D4A843" },
                              children: "Camp Info"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: day.campsiteInfo })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
                      ["Breakfast", day.meals.breakfast],
                      ["Lunch", day.meals.lunch],
                      ["Dinner", day.meals.dinner]
                    ].map(([label, meal]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-lg p-3",
                        style: { background: "rgba(255,255,255,0.9)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs font-semibold mb-1",
                              style: { color: "#D4A843" },
                              children: label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs",
                              style: { color: "#1A1A1A" },
                              children: meal
                            }
                          )
                        ]
                      },
                      label
                    )) }),
                    day.weatherNote && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-sm px-4 py-3 rounded-xl",
                        style: {
                          background: "rgba(168,197,218,0.1)",
                          color: "#82C8E5",
                          borderLeft: "3px solid #82C8E5"
                        },
                        children: day.weatherNote
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "px-4 py-3 rounded-xl",
                        style: {
                          borderLeft: "4px solid #F88379",
                          background: "rgba(248,131,121,0.08)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs font-bold mb-1",
                              style: { color: "#F88379" },
                              children: "PRO TIP"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: day.proTip })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "px-4 py-3 rounded-xl flex items-start gap-3",
                        style: { background: "rgba(201,168,76,0.1)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "text-xs font-bold mb-1",
                              style: { color: "#D4A843" },
                              children: "BEST PHOTO SPOT"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: day.photoSpot })
                        ] })
                      }
                    )
                  ]
                }
              )
            }
          ) })
        ]
      },
      day.dayNum
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-3 top-0 bottom-0 w-0.5",
          style: { background: "#F8837944" }
        }
      ),
      trek.itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -left-5 w-5 h-5 rounded-full border-2 flex items-center justify-center",
            style: { background: "#E6D8C4", borderColor: "#F88379" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-2 h-2 rounded-full",
                style: { background: "#F88379" }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5 border",
            style: {
              background: "rgba(255,255,255,0.9)",
              borderColor: "#4A4A4A22"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-xs font-bold px-2 py-1 rounded-full",
                    style: { background: "#F88379", color: "#1A1A1A" },
                    children: [
                      "Day ",
                      day.dayNum
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", style: { color: "#1A1A1A" }, children: day.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mb-2", style: { color: "#4A4A4A" }, children: [
                day.altitudeStart.toLocaleString(),
                " ft to",
                " ",
                day.altitudeEnd.toLocaleString(),
                " ft / ",
                day.distance,
                " km"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
                day.description.slice(0, 120),
                "..."
              ] })
            ]
          }
        )
      ] }, day.dayNum))
    ] })
  ] });
}
function TrekMapTab({ trek }) {
  const elevationData = trek.itinerary.map((day) => ({
    day: `Day ${day.dayNum}`,
    altitude: day.altitudeEnd,
    altitudeFt: day.altitudeEnd
  }));
  const totalAscent = trek.itinerary.reduce((acc, d) => {
    const diff = d.altitudeEnd - d.altitudeStart;
    return acc + (diff > 0 ? diff : 0);
  }, 0);
  const totalDescent = trek.itinerary.reduce((acc, d) => {
    const diff = d.altitudeEnd - d.altitudeStart;
    return acc + (diff < 0 ? Math.abs(diff) : 0);
  }, 0);
  const highestPoint = Math.max(...trek.itinerary.map((d) => d.altitudeEnd));
  const lowestPoint = Math.min(...trek.itinerary.map((d) => d.altitudeStart));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-5", style: { color: "#1A1A1A" }, children: "Trek Route Map" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative rounded-2xl overflow-hidden",
          style: {
            height: "380px",
            background: "linear-gradient(135deg, #1A2A1A 0%, #0D1A0D 50%, #E6D8C4 100%)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
                alt: "Trek route map",
                className: "w-full h-full object-cover opacity-40"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "absolute inset-0 w-full h-full",
                viewBox: "0 0 800 400",
                preserveAspectRatio: "none",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "marker",
                    {
                      id: "arrowhead",
                      markerWidth: "10",
                      markerHeight: "7",
                      refX: "10",
                      refY: "3.5",
                      orient: "auto",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: "#F88379" })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M 80,300 C 150,280 200,250 260,200 S 380,130 440,120 S 560,100 620,90 S 700,95 740,100",
                      fill: "none",
                      stroke: "#F88379",
                      strokeWidth: "3",
                      strokeDasharray: "8,4",
                      markerEnd: "url(#arrowhead)"
                    }
                  ),
                  [80, 260, 440, 620, 740].map((x, i) => {
                    const ys = [300, 200, 120, 90, 100];
                    const labels = ["Base Camp", "Camp 1", "Camp 2", "Summit", "End"];
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: x,
                          cy: ys[i],
                          r: "10",
                          fill: "#E6D8C4",
                          stroke: "#F88379",
                          strokeWidth: "2"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: ys[i], r: "4", fill: "#1A1A1A" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "text",
                        {
                          x,
                          y: ys[i] - 18,
                          textAnchor: "middle",
                          fill: "#1A1A1A",
                          fontSize: "11",
                          fontFamily: "var(--font-display)",
                          children: labels[i]
                        }
                      )
                    ] }, labels[i]);
                  })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute bottom-4 right-4 rounded-xl px-4 py-3 flex flex-col gap-2",
                style: { background: "rgba(26,14,16,0.85)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-xs",
                      style: { color: "#1A1A1A" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-6 h-1 rounded",
                            style: { background: "#F88379" }
                          }
                        ),
                        " ",
                        "Trek Route"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-xs",
                      style: { color: "#1A1A1A" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-3 h-3 rounded-full border-2",
                            style: { borderColor: "#F88379", background: "#E6D8C4" }
                          }
                        ),
                        " ",
                        "Waypoints"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 flex flex-col gap-2", children: ["Terrain", "Satellite", "Topo"].map((layer) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-xs px-3 py-1.5 rounded-lg",
                style: {
                  background: "rgba(26,14,16,0.85)",
                  color: "#4A4A4A",
                  border: "1px solid #4A4A4A33"
                },
                children: layer
              },
              layer
            )) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Elevation Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AreaChart,
            {
              data: elevationData,
              margin: { top: 10, right: 20, bottom: 10, left: 20 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "altGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#F88379", stopOpacity: 0.4 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#F88379", stopOpacity: 0.05 })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#4A4A4A22" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", tick: { fill: "#4A4A4A", fontSize: 11 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    tick: { fill: "#4A4A4A", fontSize: 11 },
                    tickFormatter: (v) => `${v.toLocaleString()} ft`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      background: "#E6D8C4",
                      border: "1px solid #4A4A4A44",
                      borderRadius: "8px",
                      color: "#1A1A1A"
                    },
                    formatter: (value) => [
                      `${value.toLocaleString()} ft`,
                      "Altitude"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Area,
                  {
                    type: "monotone",
                    dataKey: "altitude",
                    stroke: "#F88379",
                    strokeWidth: 2,
                    fill: "url(#altGradient)"
                  }
                )
              ]
            }
          ) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Route Statistics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        { label: "Total Distance", value: `${trek.trekDistance} km` },
        {
          label: "Total Ascent",
          value: `${totalAscent.toLocaleString()} ft`
        },
        {
          label: "Total Descent",
          value: `${totalDescent.toLocaleString()} ft`
        },
        {
          label: "Highest Point",
          value: `${highestPoint.toLocaleString()} ft`
        },
        {
          label: "Lowest Point",
          value: `${lowestPoint.toLocaleString()} ft`
        },
        {
          label: "Avg Daily Dist",
          value: `${(trek.trekDistance / trek.durationDays).toFixed(1)} km`
        },
        { label: "Trek Duration", value: `${trek.durationDays} days` },
        {
          label: "Starting Point",
          value: trek.startingPoint.split(",")[0]
        }
      ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl p-4 text-center border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", style: { color: "#1A1A1A" }, children: stat.value })
          ]
        },
        stat.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "GPS Track Download" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "px-6 py-3 rounded-xl text-sm font-semibold border",
            style: { borderColor: "#F88379", color: "#F88379" },
            children: "Download .GPX File"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "px-6 py-3 rounded-xl text-sm font-semibold border",
            style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
            children: "Download .KML File"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "px-6 py-3 rounded-xl text-sm font-semibold border",
            style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
            children: "Garmin / Suunto Guide"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Nearby Peaks & Passes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", children: [
        { name: "Swargarohini", alt: "20,069 ft", dist: "12 km" },
        { name: "Bandarpoonch", alt: "20,722 ft", dist: "28 km" },
        { name: "Kedarnath Peak", alt: "22,769 ft", dist: "45 km" },
        { name: "Gangotri Group", alt: "21,900 ft", dist: "38 km" }
      ].map((peak) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-4 rounded-xl p-4 border",
          style: {
            background: "rgba(45,27,30,0.6)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: "⛰" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-sm",
                  style: { color: "#1A1A1A" },
                  children: peak.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: [
                peak.alt,
                " / ",
                peak.dist,
                " away"
              ] })
            ] })
          ]
        },
        peak.name
      )) })
    ] })
  ] });
}
const NEARBY_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  "https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=400&q=80",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
];
const QUIZ_QUESTIONS = [
  {
    q: "Can you walk 15+ km per day on flat terrain?",
    options: ["Yes, easily", "With effort", "No"]
  },
  {
    q: "Have you trekked at altitudes above 10,000 ft?",
    options: ["Yes, multiple times", "Once or twice", "Never"]
  },
  {
    q: "Can you carry a 10 kg backpack for 6 hours?",
    options: ["Yes", "Maybe", "No"]
  },
  {
    q: "Do you exercise regularly (3+ days/week)?",
    options: ["Yes", "Occasionally", "Rarely"]
  },
  {
    q: "Any medical conditions (heart, asthma, BP)?",
    options: ["None", "Minor/controlled", "Yes"]
  }
];
function TrekOverviewTab({ trek }) {
  const [openPack, setOpenPack] = reactExports.useState(null);
  const [packed, setPacked] = reactExports.useState({});
  const [quizStep, setQuizStep] = reactExports.useState(0);
  const [quizAnswers, setQuizAnswers] = reactExports.useState([]);
  const [quizDone, setQuizDone] = reactExports.useState(false);
  const packingCategories = {
    Clothing: [
      { name: "Moisture-wicking base layer (3 sets)", essential: true },
      { name: "Fleece jacket", essential: true },
      { name: "Down/insulated jacket", essential: true },
      { name: "Waterproof shell jacket", essential: true },
      { name: "Trekking pants (2 pairs)", essential: true },
      { name: "Thermal leggings", essential: true },
      { name: "Woollen cap & balaclava", essential: true },
      { name: "Trekking gloves", essential: true },
      { name: "Woollen socks (3 pairs)", essential: true },
      { name: "Sun hat / buff", essential: false }
    ],
    Footwear: [
      { name: "Ankle-support trekking shoes (Vibram sole)", essential: true },
      { name: "Camp sandals / slippers", essential: false },
      {
        name: "Gaiters (snow treks)",
        essential: trek.difficulty === "Difficult" || trek.difficulty === "Extreme"
      }
    ],
    Equipment: [
      { name: "40-50L backpack with rain cover", essential: true },
      { name: "Sleeping bag (-10°C rated)", essential: true },
      { name: "Trekking poles (pair)", essential: false },
      { name: "Headlamp + extra batteries", essential: true },
      { name: "Water bottles (2L total)", essential: true },
      { name: "Sunscreen SPF 50+", essential: true },
      { name: "Sunglasses UV400", essential: true },
      { name: "Camera / GoPro", essential: false },
      { name: "Power bank 10,000 mAh+", essential: false }
    ],
    Personal: [
      { name: "Personal first aid kit", essential: true },
      { name: "ORS sachets (6+)", essential: true },
      { name: "Personal medication", essential: true },
      { name: "Toilet paper / wet wipes", essential: true },
      { name: "Hand sanitizer", essential: true },
      { name: "Lip balm", essential: false }
    ],
    Documents: [
      { name: "Aadhaar card / Government ID", essential: true },
      { name: "Medical fitness certificate", essential: true },
      { name: "Booking confirmation printout", essential: true },
      { name: "Travel insurance policy", essential: false },
      { name: "Emergency contact card", essential: true }
    ]
  };
  const togglePacked = (key) => {
    setPacked((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const totalItems = Object.values(packingCategories).flat().length;
  const packedCount = Object.values(packed).filter(Boolean).length;
  const handleQuizAnswer = (idx) => {
    const newAnswers = [...quizAnswers, idx];
    if (quizStep + 1 >= QUIZ_QUESTIONS.length) {
      setQuizAnswers(newAnswers);
      setQuizDone(true);
    } else {
      setQuizAnswers(newAnswers);
      setQuizStep((s) => s + 1);
    }
  };
  const quizScore = quizAnswers.reduce((acc, a) => acc + (2 - a), 0);
  const fitnessResult = quizScore >= 8 ? "ready" : quizScore >= 5 ? "almost" : "training";
  const refTable = [
    ["Trek Grade", trek.difficulty],
    [
      "Max Elevation",
      `${trek.maxAltitude.toLocaleString()} ft (${trek.maxAltitudeM.toLocaleString()} m)`
    ],
    ["Trek Distance", `${trek.trekDistance} km`],
    ["Duration", `${trek.durationDays} Days / ${trek.durationNights} Nights`],
    ["Best Time", trek.bestTime],
    ["Starting Point", trek.startingPoint],
    ["Nearest Railhead", trek.nearestRailhead],
    ["Nearest Airport", trek.nearestAirport],
    ["Accommodation", "High-quality dome tents (2-person)"],
    ["Meals", "All meals from Day 1 dinner"],
    ["Water Sources", "Natural streams + purified water at camps"],
    ["Mobile Network", "Available until base camp only"],
    ["ATM Access", "Last ATM at nearest town"],
    [
      "Permit Required",
      trek.permits.length > 0 ? "Yes - arranged by Shail Hikers" : "No"
    ],
    ["Forest Dept. Entry", "Yes - included in package"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "About This Trek" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 leading-relaxed", style: { color: "#4A4A4A" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Nestled in the heart of ",
          trek.region,
          ", the ",
          trek.name,
          " trek is one of Uttarakhand's most treasured Himalayan journeys. Starting from",
          " ",
          trek.startingPoint,
          ", the trail weaves through dense deodar and oak forests before opening into sweeping alpine meadows that seem to touch the sky."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "At its peak elevation of ",
          trek.maxAltitude.toLocaleString(),
          " feet, the panoramic views encompass an unbroken chain of snow-capped Himalayan giants — a spectacle that rewards every step of the ascent. The landscape shifts dramatically with each day: rushing glacial streams give way to silent snowfields, and rhododendron canopies yield to the stark, beautiful barrenness of high altitude."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The cultural tapestry of this region adds profound depth to the physical journey. Ancient shepherds' trails, centuries-old temples perched on impossible ridges, and the warm hospitality of Garhwali villages along the route create an experience that transcends mere adventure. Every campfire story from your Shail Hikers guides connects you to generations of mountain people who have walked these same paths." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "What sets ",
          trek.name,
          " apart is its accessibility to the trekker's soul — challenging enough to demand your best, yet forgiving enough to let you absorb the grandeur. The ",
          trek.durationDays,
          "-day itinerary is crafted to build altitude gradually, ensuring acclimatisation happens naturally as the drama of the landscape unfolds day by day."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shail Hikers has guided over 500 groups on this trail since 2015, refining every campsite selection, every meal plan, and every safety protocol. When you trek with us, you're not just on a guided trip — you're part of a community of explorers who return transformed." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "Trek Highlights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: trek.highlights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05 },
          className: "rounded-xl p-4 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: h.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-semibold text-sm mb-1",
                style: { color: "#1A1A1A" },
                children: h.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: h.description })
          ]
        },
        h.title
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "Trek at a Glance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden border",
          style: { borderColor: "#4A4A4A33" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: refTable.map(([label, value], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              style: {
                background: i % 2 === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.9)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: "px-5 py-3 text-sm font-semibold w-1/2",
                    style: { color: "#4A4A4A" },
                    children: label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: "px-5 py-3 text-sm",
                    style: { color: "#1A1A1A" },
                    children: value
                  }
                )
              ]
            },
            label
          )) }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "Fitness & Training" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm", style: { color: "#4A4A4A" }, children: "Fitness Level Required" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-full h-4 mb-4",
              style: { background: "#FFFFFF" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "h-4 rounded-full",
                  style: { background: "#F88379" },
                  initial: { width: 0 },
                  whileInView: { width: `${trek.fitnessLevel / 10 * 100}%` },
                  viewport: { once: true },
                  transition: { duration: 1 }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: [
            trek.fitnessLevel,
            "/10 —",
            " ",
            trek.fitnessLevel <= 3 ? "Beginner friendly" : trek.fitnessLevel <= 6 ? "Moderate fitness needed" : "High fitness required"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 space-y-2 text-sm",
              style: { color: "#1A1A1A" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Min age: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                    trek.minAge,
                    " years"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  "Max recommended: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                    trek.maxAge,
                    " years"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: "Medical conditions that disqualify: heart disease, severe asthma, recent surgeries, uncontrolled hypertension" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-3", style: { color: "#1A1A1A" }, children: "Am I Fit Enough?" }),
          !quizDone ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-5 border",
              style: {
                background: "rgba(255,255,255,0.9)",
                borderColor: "#4A4A4A33"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mb-3", style: { color: "#4A4A4A" }, children: [
                  "Question ",
                  quizStep + 1,
                  " of ",
                  QUIZ_QUESTIONS.length
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-sm font-medium mb-4",
                    style: { color: "#1A1A1A" },
                    children: QUIZ_QUESTIONS[quizStep].q
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: QUIZ_QUESTIONS[quizStep].options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleQuizAnswer(i),
                    className: "w-full text-left px-4 py-2 rounded-lg text-sm transition-colors",
                    style: {
                      background: "rgba(248,131,121,0.15)",
                      color: "#1A1A1A",
                      border: "1px solid #F8837966"
                    },
                    children: opt
                  },
                  opt
                )) })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-5 border",
              style: {
                background: fitnessResult === "ready" ? "rgba(45,80,22,0.3)" : fitnessResult === "almost" ? "rgba(201,168,76,0.2)" : "rgba(248,131,121,0.2)",
                borderColor: fitnessResult === "ready" ? "#2D6A4F" : fitnessResult === "almost" ? "#D4A843" : "#F88379"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-bold text-lg mb-2",
                    style: {
                      color: fitnessResult === "ready" ? "#90EE90" : fitnessResult === "almost" ? "#D4A843" : "#1A1A1A"
                    },
                    children: fitnessResult === "ready" ? "You're Trek-Ready!" : fitnessResult === "almost" ? "Almost There" : "More Training Needed"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: fitnessResult === "ready" ? "Great fitness level! Book your spot with confidence." : fitnessResult === "almost" ? "4-6 weeks of focused training and you'll be set." : "We recommend 10+ weeks of cardio and strength training before this trek." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setQuizStep(0);
                      setQuizAnswers([]);
                      setQuizDone(false);
                    },
                    className: "mt-3 text-xs underline",
                    style: { color: "#4A4A4A" },
                    children: "Retake Quiz"
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "What Makes This Trek Unique" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: trek.uniqueFeatures.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#F8837966"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-display text-lg font-semibold mb-2",
                style: { color: "#F88379" },
                children: "Only on this trek"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", style: { color: "#1A1A1A" }, children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: f.description })
          ]
        },
        f.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-6 rounded-xl p-5 border-l-4",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderLeftColor: "#D4A843"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-1", style: { color: "#D4A843" }, children: "Did You Know?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: trek.didYouKnow })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "Flora & Fauna" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [...trek.flora, ...trek.fauna].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 rounded-xl p-4 border",
          style: {
            background: "rgba(45,27,30,0.6)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: s.type === "flora" ? "🌿" : "🦅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-sm font-semibold",
                  style: { color: "#1A1A1A" },
                  children: s.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: s.description })
            ] })
          ]
        },
        s.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: "Packing Checklist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
          packedCount,
          "/",
          totalItems,
          " packed"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-full h-2 mb-6",
          style: { background: "#FFFFFF" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-2 rounded-full transition-all duration-300",
              style: {
                background: "#F88379",
                width: `${totalItems > 0 ? packedCount / totalItems * 100 : 0}%`
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.entries(packingCategories).map(([cat, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border",
          style: { borderColor: "#4A4A4A22" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenPack(openPack === cat ? null : cat),
                className: "w-full flex items-center justify-between px-5 py-4",
                style: { color: "#1A1A1A" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    cat,
                    " (",
                    items.length,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: openPack === cat ? "▲" : "▼" })
                ]
              }
            ),
            openPack === cat && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4 space-y-2", children: items.map((item) => {
              const key = `${cat}-${item.name}`;
              const badgeBg = item.essential ? "rgba(248,131,121,0.2)" : "rgba(45,27,30,0.6)";
              const badgeColor = item.essential ? "#F88379" : "#4A4A4A";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  className: "flex items-center gap-3 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!packed[key],
                        onChange: () => togglePacked(key),
                        className: "accent-[#F88379] w-4 h-4"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-sm flex-1",
                        style: { color: packed[key] ? "#2D6A4F" : "#1A1A1A" },
                        children: item.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2 py-0.5 rounded-full",
                        style: {
                          background: badgeBg,
                          color: badgeColor,
                          border: `1px solid ${badgeColor}44`
                        },
                        children: item.essential ? "Essential" : "Optional"
                      }
                    )
                  ]
                },
                key
              );
            }) })
          ]
        },
        cat
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-6", style: { color: "#1A1A1A" }, children: "Nearby Attractions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: trek.nearestAttractions.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl overflow-hidden border",
          style: { borderColor: "#4A4A4A22" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: NEARBY_IMAGES[i % NEARBY_IMAGES.length],
                alt: a.name,
                className: "w-full h-32 object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-sm font-semibold mb-1",
                  style: { color: "#1A1A1A" },
                  children: a.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: [
                a.distance,
                " km · ",
                a.type
              ] })
            ] })
          ]
        },
        a.name
      )) })
    ] })
  ] });
}
function TrekPermitsTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: "Permits & Regulations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-5", style: { color: "#1A1A1A" }, children: "Required Permits" }),
      trek.permits.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: trek.permits.map((permit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: permit.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-3 py-1 rounded-full",
                  style: {
                    background: "rgba(45,80,22,0.3)",
                    color: "#4A7C2F"
                  },
                  children: "Included in Package"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: "Issued by: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: permit.issuedBy })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: "Cost: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: permit.cost })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4A4A4A" }, children: "How we handle it: " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: permit.handledBy })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#4A4A4A" }, children: [
                  "Documents required:",
                  " "
                ] }),
                permit.documentsRequired.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "ml-1 text-xs px-2 py-0.5 rounded-full",
                    style: {
                      background: "rgba(248,131,121,0.2)",
                      color: "#F88379"
                    },
                    children: doc
                  },
                  doc
                ))
              ] })
            ] })
          ]
        },
        permit.name
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A22"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: "No special permits required for this trek beyond standard forest entry fees, which are included in your package." })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-6 border",
        style: {
          background: "rgba(248,131,121,0.1)",
          borderColor: "#F8837966"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", style: { color: "#1A1A1A" }, children: "Upload Your Documents Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mb-4", style: { color: "#4A4A4A" }, children: "Upload your Aadhaar card and medical fitness certificate in your dashboard. Our team processes permits 48 hours before your trek departure." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/dashboard",
              className: "inline-block px-5 py-2.5 rounded-xl text-sm font-semibold",
              style: { background: "#F88379", color: "#1A1A1A" },
              children: "Upload Aadhaar in Dashboard"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", style: { color: "#1A1A1A" }, children: "Foreign Nationals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A22"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", style: { color: "#1A1A1A" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "01" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Valid passport required. Photocopies submitted to forest department." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "02" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Inner Line Permit (ILP) required for certain sanctuary zones. Shail Hikers arranges this on your behalf." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "03" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Process takes 5-7 business days. Please complete booking at least 3 weeks before trek date." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "04" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Contact us at Shailhikers@gmail.com for a customised permit checklist for your nationality." })
            ] })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", style: { color: "#1A1A1A" }, children: "Trek Regulations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
        {
          title: "Photography",
          desc: "No photography of military installations near borders. Drones require DGCA clearance - contact us 30 days ahead."
        },
        {
          title: "Camping Zones",
          desc: "Camping only in designated zones. No random pitching. Shail Hikers selects approved campsites only."
        },
        {
          title: "Waste Policy",
          desc: "Carry all non-biodegradable waste back to base. We conduct a trail clean-up sweep after every batch."
        },
        {
          title: "Drone Usage",
          desc: "Drone operations require prior clearance from DGCA and forest authorities. Apply 30 days in advance."
        }
      ].map((reg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-4 rounded-xl p-4 border",
          style: {
            background: "rgba(45,27,30,0.6)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                style: { background: "#F88379" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "font-semibold text-sm mb-1",
                  style: { color: "#1A1A1A" },
                  children: reg.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: reg.desc })
            ] })
          ]
        },
        reg.title
      )) })
    ] })
  ] });
}
const PHOTO_FILTERS = [
  "All",
  "Trail",
  "Summit",
  "Camps",
  "Flora",
  "Sunrise",
  "Group",
  "Winter",
  "Monsoon"
];
const CATEGORIES = [
  "Trail",
  "Summit",
  "Camps",
  "Flora",
  "Sunrise",
  "Group",
  "Trail",
  "Winter",
  "Monsoon"
];
const PHOTO_META = [
  {
    location: "Summit Ridge",
    altitude: "12,500 ft",
    photographer: "Deepak Singh",
    date: "Jan 2025"
  },
  {
    location: "Base Camp",
    altitude: "8,200 ft",
    photographer: "Rahul Negi",
    date: "Dec 2024"
  },
  {
    location: "Forest Trail",
    altitude: "7,500 ft",
    photographer: "Priya Rawat",
    date: "Feb 2025"
  },
  {
    location: "Campsite 2",
    altitude: "10,200 ft",
    photographer: "Amit Kumar",
    date: "Mar 2025"
  },
  {
    location: "Meadow Top",
    altitude: "11,800 ft",
    photographer: "Deepak Singh",
    date: "Apr 2025"
  },
  {
    location: "View Point",
    altitude: "12,000 ft",
    photographer: "Rahul Negi",
    date: "Jan 2025"
  }
];
function TrekPhotosTab({ trek }) {
  const [filter, setFilter] = reactExports.useState("All");
  const [lightbox, setLightbox] = reactExports.useState(null);
  const photos = trek.galleryImages.slice(0, 9);
  const filtered = filter === "All" ? photos : photos.filter((_, i) => CATEGORIES[i % CATEGORIES.length] === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-4", style: { color: "#1A1A1A" }, children: "Photo of the Month" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden h-64", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: photos[0],
            alt: "Featured trek scenery",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 flex flex-col justify-end p-6",
            style: {
              background: "linear-gradient(to top, rgba(255,255,255,0.95), transparent)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Featured - January 2025" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl", style: { color: "#1A1A1A" }, children: [
                "First light on the ",
                trek.name,
                " summit ridge"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", style: { color: "#4A4A4A" }, children: [
                PHOTO_META[0].location,
                " / ",
                PHOTO_META[0].altitude,
                " / by",
                " ",
                PHOTO_META[0].photographer
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PHOTO_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFilter(f),
        className: "text-xs px-4 py-2 rounded-full transition-colors",
        style: {
          background: filter === f ? "#F88379" : "rgba(255,255,255,0.9)",
          color: "#1A1A1A",
          border: `1px solid ${filter === f ? "#F88379" : "#4A4A4A33"}`
        },
        children: f
      },
      f
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-2 md:columns-3 gap-4 space-y-4", children: filtered.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "relative cursor-pointer rounded-xl overflow-hidden break-inside-avoid w-full",
        onClick: () => setLightbox(i),
        "aria-label": `View photo ${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img,
              alt: `${trek.name} - ${CATEGORIES[i % CATEGORIES.length]}`,
              className: "w-full object-cover transition-transform duration-300 hover:scale-105",
              style: { minHeight: i % 3 === 0 ? "250px" : "180px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 p-2",
              style: {
                background: "linear-gradient(to top, rgba(255,255,255,0.9), transparent)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: CATEGORIES[i % CATEGORIES.length] })
            }
          )
        ]
      },
      img
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "px-5 py-2.5 rounded-xl text-sm border",
        style: { borderColor: "#4A4A4A44", color: "#4A4A4A" },
        children: "Submit Your Photo"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-4", style: { color: "#1A1A1A" }, children: "360 Degree Panorama" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl flex items-center justify-center h-48 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🌐" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: [
              trek.name,
              " Summit - 360 Degree View"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", style: { color: "#4A4A4A" }, children: "Interactive panorama viewer" })
          ] })
        }
      )
    ] }),
    lightbox !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        open: true,
        className: "fixed inset-0 z-50 flex items-center justify-center m-0 w-full h-full max-w-none max-h-none border-0 p-0",
        style: { background: "rgba(255,255,255,0.95)" },
        onClick: () => setLightbox(null),
        onKeyDown: (e) => {
          if (e.key === "Escape") setLightbox(null);
        },
        "aria-modal": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative max-w-4xl w-full mx-4",
            onClick: (e) => e.stopPropagation(),
            onKeyDown: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setLightbox(null),
                  className: "absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center",
                  style: { background: "#F88379", color: "#1A1A1A" },
                  children: "x"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setLightbox(
                    (l) => l !== null && l > 0 ? l - 1 : filtered.length - 1
                  ),
                  className: "absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center",
                  style: { background: "rgba(255,255,255,0.9)", color: "#1A1A1A" },
                  children: "‹"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setLightbox(
                    (l) => l !== null && l < filtered.length - 1 ? l + 1 : 0
                  ),
                  className: "absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center",
                  style: { background: "rgba(255,255,255,0.9)", color: "#1A1A1A" },
                  children: "›"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: filtered[lightbox],
                  alt: "Lightbox",
                  className: "w-full rounded-2xl"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
                  PHOTO_META[lightbox % PHOTO_META.length].location,
                  " /",
                  " ",
                  PHOTO_META[lightbox % PHOTO_META.length].altitude
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
                  "by ",
                  PHOTO_META[lightbox % PHOTO_META.length].photographer
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
function useWaitlistPosition(batchId, email) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["waitlist-position", batchId, email],
    queryFn: async () => {
      if (!actor || !batchId || !email) return null;
      return actor.getWaitlistPosition(batchId, email);
    },
    enabled: !!actor && !isFetching && batchId.length > 0 && email.length > 0
  });
}
function useJoinWaitlist() {
  const queryClient = useQueryClient();
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (params) => {
      if (!actor)
        throw new Error(
          "Backend not connected. Please check your connection and try again."
        );
      return actor.joinWaitlist(
        params.batchId,
        params.name,
        params.email,
        params.phone,
        params.numPeople ?? BigInt(1)
      );
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["waitlist-position", variables.batchId, variables.email]
      });
      queryClient.invalidateQueries({
        queryKey: ["batches"]
      });
    }
  });
}
const BATCHES = [
  { date: "2025-01-15", guide: "Deepak Singh", seats: 8, booked: 6 },
  { date: "2025-01-29", guide: "Rahul Negi", seats: 10, booked: 10 },
  { date: "2025-02-05", guide: "Priya Rawat", seats: 10, booked: 3 },
  { date: "2025-02-19", guide: "Amit Kumar", seats: 8, booked: 8 },
  { date: "2025-03-05", guide: "Deepak Singh", seats: 10, booked: 1 },
  { date: "2025-03-19", guide: "Rahul Negi", seats: 10, booked: 7 }
];
const PRICE_BREAKDOWN = [
  { label: "Expert Guides", pct: 30, color: "#F88379" },
  { label: "Permits & Fees", pct: 10, color: "#D4A843" },
  { label: "Meals", pct: 25, color: "#2D6A4F" },
  { label: "Transport", pct: 20, color: "#82C8E5" },
  { label: "Gear & Equipment", pct: 15, color: "#4A4A4A" }
];
function TrekPricingTab({ trek }) {
  const [groupSize, setGroupSize] = reactExports.useState(2);
  const [showBreakdown, setShowBreakdown] = reactExports.useState(false);
  const [selectedBatch, setSelectedBatch] = reactExports.useState(null);
  const [wlName, setWlName] = reactExports.useState("");
  const [wlEmail, setWlEmail] = reactExports.useState("");
  const [wlPhone, setWlPhone] = reactExports.useState("");
  const [wlSubmitted, setWlSubmitted] = reactExports.useState(false);
  const [wlError, setWlError] = reactExports.useState("");
  const joinWaitlistMutation = useJoinWaitlist();
  const [submittedBatchId, setSubmittedBatchId] = reactExports.useState(null);
  const [submittedEmail, setSubmittedEmail] = reactExports.useState(null);
  const { data: waitlistPosition } = useWaitlistPosition(
    submittedBatchId ?? "",
    submittedEmail ?? ""
  );
  const getDiscount = () => {
    if (groupSize === 1) return -0.15;
    if (groupSize <= 4) return 0;
    if (groupSize <= 8) return 0.05;
    if (groupSize <= 15) return 0.1;
    return 0.15;
  };
  const discount = getDiscount();
  const adjustedPrice = Math.round(trek.basePrice * 1.15);
  const discountedPrice = groupSize > 4 ? Math.round(trek.basePrice * (1 - discount)) : trek.basePrice;
  const pricePerPerson = groupSize === 1 ? adjustedPrice : discountedPrice;
  const totalPrice = pricePerPerson * groupSize;
  const getBatchStatus = (booked, seats) => {
    const pct = booked / seats;
    if (booked >= seats)
      return { label: "Sold Out", color: "#F88379", dot: "#F88379" };
    if (pct >= 0.7)
      return { label: "Filling Fast", color: "#D4A843", dot: "#D4A843" };
    return { label: "Available", color: "#4A7C2F", dot: "#4A7C2F" };
  };
  const isBatchFull = (booked, seats) => booked >= seats;
  const seatsLeft = (booked, seats) => seats - booked;
  const handleJoinWaitlist = async (batchId) => {
    setWlError("");
    if (!wlName.trim() || !wlEmail.trim() || !wlPhone.trim()) {
      setWlError("Please fill in all fields.");
      return;
    }
    try {
      await joinWaitlistMutation.mutateAsync({
        batchId,
        name: wlName.trim(),
        email: wlEmail.trim(),
        phone: wlPhone.trim()
      });
      setWlSubmitted(true);
      setSubmittedBatchId(batchId);
      setSubmittedEmail(wlEmail.trim());
      setWlName("");
      setWlEmail("");
      setWlPhone("");
    } catch (e) {
      setWlError(
        e instanceof Error ? e.message : "Failed to join waitlist. Please try again."
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-sm px-3 py-1.5 rounded-full border",
            style: { borderColor: "#D4A843", color: "#D4A843" },
            children: "Price Match Guarantee"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl overflow-hidden border",
          style: { borderColor: "#4A4A4A33" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { background: "rgba(248,131,121,0.2)" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-5 py-3 text-left",
                  style: { color: "#1A1A1A" },
                  children: "Group Size"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-5 py-3 text-right",
                  style: { color: "#1A1A1A" },
                  children: "Price/Person"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-5 py-3 text-right",
                  style: { color: "#1A1A1A" },
                  children: "Savings"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
              {
                label: "Solo (1 person)",
                price: Math.round(trek.basePrice * 1.15),
                save: "--"
              },
              {
                label: "2-4 persons",
                price: trek.basePrice,
                save: "Base Price"
              },
              {
                label: "5-8 persons",
                price: Math.round(trek.basePrice * 0.95),
                save: `Save Rs.${Math.round(trek.basePrice * 0.05).toLocaleString()}`
              },
              {
                label: "9-15 persons",
                price: Math.round(trek.basePrice * 0.9),
                save: `Save Rs.${Math.round(trek.basePrice * 0.1).toLocaleString()}`
              },
              {
                label: "16+ persons",
                price: Math.round(trek.basePrice * 0.85),
                save: "Contact Us"
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                style: {
                  background: row.label.startsWith("2") || row.label.startsWith("9") ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.9)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", style: { color: "#1A1A1A" }, children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "td",
                    {
                      className: "px-5 py-3 text-right font-semibold",
                      style: { color: "#D4A843" },
                      children: [
                        "Rs.",
                        row.price.toLocaleString()
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-5 py-3 text-right text-xs",
                      style: { color: "#4A7C2F" },
                      children: row.save
                    }
                  )
                ]
              },
              row.label
            )) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs", style: { color: "#4A4A4A" }, children: "All prices include 5% GST. Early bird: 10% off if booked 60+ days ahead." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Group Price Calculator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "group-size-range",
                  className: "text-sm",
                  style: { color: "#4A4A4A" },
                  children: "Group Size:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  id: "group-size-range",
                  min: 1,
                  max: 20,
                  value: groupSize,
                  onChange: (e) => setGroupSize(Number(e.target.value)),
                  className: "flex-1 accent-[#F88379]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-bold text-lg w-12 text-center",
                  style: { color: "#1A1A1A" },
                  children: groupSize
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center rounded-xl p-4",
                  style: { background: "rgba(255,255,255,0.9)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Per Person" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xl", style: { color: "#D4A843" }, children: [
                      "Rs.",
                      pricePerPerson.toLocaleString()
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center rounded-xl p-4",
                  style: { background: "rgba(255,255,255,0.9)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Group Discount" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "font-bold text-xl",
                        style: { color: discount > 0 ? "#4A7C2F" : "#4A4A4A" },
                        children: discount > 0 ? `${(discount * 100).toFixed(0)}%` : "--"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center rounded-xl p-4",
                  style: { background: "rgba(248,131,121,0.15)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: "Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xl", style: { color: "#F88379" }, children: [
                      "Rs.",
                      totalPrice.toLocaleString()
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowBreakdown(!showBreakdown),
          className: "text-sm underline mb-4",
          style: { color: "#4A4A4A" },
          children: [
            showBreakdown ? "Hide" : "Show",
            " where your money goes"
          ]
        }
      ),
      showBreakdown && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: PRICE_BREAKDOWN.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 text-sm", style: { color: "#1A1A1A" }, children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 h-3 rounded-full",
                style: { background: "rgba(255,255,255,0.9)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-3 rounded-full",
                    style: { background: item.color, width: `${item.pct}%` }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-sm font-semibold w-10 text-right",
                style: { color: item.color },
                children: [
                  item.pct,
                  "%"
                ]
              }
            )
          ] }, item.label))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Upcoming Batches" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: BATCHES.map((batch, i) => {
        const status = getBatchStatus(batch.booked, batch.seats);
        const date = new Date(batch.date);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "rounded-xl border cursor-pointer transition-all w-full text-left",
            style: {
              background: selectedBatch === i ? "rgba(248,131,121,0.15)" : "rgba(255,255,255,0.9)",
              borderColor: selectedBatch === i ? "#F88379" : "#4A4A4A22"
            },
            onClick: () => setSelectedBatch(selectedBatch === i ? null : i),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 px-5 py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0",
                    style: { background: "rgba(248,131,121,0.2)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: date.toLocaleString("default", { month: "short" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-xl font-bold",
                          style: { color: "#1A1A1A" },
                          children: date.getDate()
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "font-semibold text-sm",
                      style: { color: "#1A1A1A" },
                      children: [
                        "Guide: ",
                        batch.guide
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-1", style: { color: "#4A4A4A" }, children: isBatchFull(batch.booked, batch.seats) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-1",
                      style: { color: "#F88379" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-2 h-2 rounded-full inline-block animate-pulse",
                            style: { background: "#F88379" }
                          }
                        ),
                        "Sold Out"
                      ]
                    }
                  ) : seatsLeft(batch.booked, batch.seats) <= 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#F88379" }, children: [
                    "Only ",
                    seatsLeft(batch.booked, batch.seats),
                    " seats left!"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    seatsLeft(batch.booked, batch.seats),
                    " of",
                    " ",
                    batch.seats,
                    " seats left"
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold", style: { color: "#D4A843" }, children: [
                    "Rs.",
                    trek.basePrice.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1 flex items-center gap-1 justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full",
                        style: { background: status.dot }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: status.color }, children: status.label })
                  ] })
                ] })
              ] }),
              selectedBatch === i && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border-t px-5 py-4 space-y-3",
                  style: { borderColor: "#4A4A4A22" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
                      "Trek duration: ",
                      trek.durationDays,
                      " days /",
                      " ",
                      trek.durationNights,
                      " nights"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: batch.booked < batch.seats ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `/book/${trek.slug}`,
                        className: "px-5 py-2 rounded-lg text-sm font-semibold",
                        style: { background: "#F88379", color: "#1A1A1A" },
                        "data-ocid": "trek.reserve_batch_button",
                        children: "Reserve This Batch"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full space-y-3", children: !wlSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          className: "px-5 py-2 rounded-lg text-sm font-semibold border-2",
                          style: {
                            borderColor: "#F88379",
                            color: "#F88379",
                            background: "transparent"
                          },
                          "data-ocid": "trek.join_waitlist_button",
                          children: "Join Waitlist"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            placeholder: "Full Name",
                            value: wlName,
                            onChange: (e) => setWlName(e.target.value),
                            className: "w-full px-3 py-2 rounded-lg text-sm border bg-transparent",
                            style: {
                              borderColor: "#4A4A4A44",
                              color: "#1A1A1A"
                            },
                            "data-ocid": "trek.waitlist_name_input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "email",
                            placeholder: "Email",
                            value: wlEmail,
                            onChange: (e) => setWlEmail(e.target.value),
                            className: "w-full px-3 py-2 rounded-lg text-sm border bg-transparent",
                            style: {
                              borderColor: "#4A4A4A44",
                              color: "#1A1A1A"
                            },
                            "data-ocid": "trek.waitlist_email_input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "tel",
                            placeholder: "Phone",
                            value: wlPhone,
                            onChange: (e) => setWlPhone(e.target.value),
                            className: "w-full px-3 py-2 rounded-lg text-sm border bg-transparent",
                            style: {
                              borderColor: "#4A4A4A44",
                              color: "#1A1A1A"
                            },
                            "data-ocid": "trek.waitlist_phone_input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleJoinWaitlist(batch.date),
                            disabled: joinWaitlistMutation.isPending,
                            className: "w-full px-5 py-2 rounded-lg text-sm font-semibold",
                            style: {
                              background: "#F88379",
                              color: "#1A1A1A"
                            },
                            "data-ocid": "trek.waitlist_submit_button",
                            children: joinWaitlistMutation.isPending ? "Joining..." : "Join Waitlist"
                          }
                        ),
                        wlError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-sm px-3 py-2 rounded-lg",
                            style: {
                              background: "rgba(248,131,121,0.15)",
                              color: "#B84030"
                            },
                            "data-ocid": "trek.waitlist_error",
                            children: wlError
                          }
                        )
                      ] })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-xl p-4 border",
                        style: {
                          background: "#E6D8C4",
                          borderColor: "#C9B99A"
                        },
                        "data-ocid": "trek.waitlist_success_card",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "font-semibold text-sm mb-1",
                              style: { color: "#1A1A1A" },
                              children: "You are on the waitlist!"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "text-sm",
                              style: { color: "#4A4A4A" },
                              children: [
                                "We will email you at",
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "font-semibold",
                                    style: { color: "#1A1A1A" },
                                    children: submittedEmail
                                  }
                                ),
                                " ",
                                "if a seat opens.",
                                waitlistPosition != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block mt-1", children: [
                                  "Your position: #",
                                  Number(waitlistPosition)
                                ] })
                              ]
                            }
                          )
                        ]
                      }
                    ) }) })
                  ]
                }
              )
            ]
          },
          batch.date
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Payment Options" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [
        {
          title: "Pay Full",
          badge: "Save 5%",
          desc: `Rs.${Math.round(trek.basePrice * 0.95).toLocaleString()}/person`,
          cta: "Book & Save"
        },
        {
          title: "Pay Rs.2,000 Now",
          badge: "Balance before trek",
          desc: "Rs.2,000 now, rest due 7 days before trek",
          cta: "Reserve Spot"
        },
        {
          title: "EMI",
          badge: "0% Interest",
          desc: "3 or 6 month EMI via Razorpay",
          cta: "Choose EMI"
        }
      ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-5 border flex flex-col",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: opt.title === "Pay Full" ? "#D4A843" : "#4A4A4A33"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: opt.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 rounded-full",
                  style: {
                    background: "rgba(201,168,76,0.2)",
                    color: "#D4A843",
                    border: "1px solid #D4A84366"
                  },
                  children: opt.badge
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm flex-1 mb-4", style: { color: "#4A4A4A" }, children: opt.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "w-full py-2.5 rounded-xl text-sm font-semibold",
                style: {
                  background: opt.title === "Pay Full" ? "#F88379" : "rgba(248,131,121,0.2)",
                  color: "#1A1A1A",
                  border: opt.title !== "Pay Full" ? "1px solid #F8837966" : void 0
                },
                children: opt.cta
              }
            )
          ]
        },
        opt.title
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 border",
        style: { background: "rgba(201,168,76,0.1)", borderColor: "#D4A84366" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", style: { color: "#D4A843" }, children: "Early Bird - 10% Off" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#1A1A1A" }, children: "Book 60+ days ahead to unlock 10% savings. Refer a friend and both get Rs.500 off your next trek." })
        ]
      }
    )
  ] });
}
const MOCK_REVIEWS = [
  {
    name: "Anjali Sharma",
    city: "Delhi",
    date: "Jan 2025",
    group: "Friends",
    overall: 5,
    guide: 5,
    trail: 4,
    food: 5,
    camping: 5,
    value: 4,
    safety: 5,
    body: "The trek was absolutely transformative. Deepak Sir's expertise made us feel safe even in the most challenging sections. The camps were cosy, food was delicious, and the summit views blew our minds. Shail Hikers is a class apart.",
    helpful: 34,
    verified: true
  },
  {
    name: "Rahul Mehta",
    city: "Mumbai",
    date: "Dec 2024",
    group: "Solo",
    overall: 5,
    guide: 5,
    trail: 5,
    food: 4,
    camping: 5,
    value: 5,
    safety: 5,
    body: "First Himalayan trek at 34 and I couldn't have chosen a better operator. The team handled everything professionally. The guide noticed I was struggling with altitude on Day 3 and personally monitored my oxygen levels. That level of care is rare.",
    helpful: 28,
    verified: true
  },
  {
    name: "Priya Kapoor",
    city: "Bangalore",
    date: "Feb 2025",
    group: "Couple",
    overall: 4,
    guide: 5,
    trail: 4,
    food: 4,
    camping: 4,
    value: 4,
    safety: 5,
    body: "Wonderful experience overall. The trek was well-organized and the team was responsive to all our concerns. Food quality was good with generous portions. Would have liked slightly warmer sleeping bags though.",
    helpful: 12,
    verified: true
  },
  {
    name: "Vikram Singh",
    city: "Chandigarh",
    date: "Nov 2024",
    group: "Group",
    overall: 5,
    guide: 5,
    trail: 5,
    food: 5,
    camping: 5,
    value: 5,
    safety: 5,
    body: "Did this with 8 friends and it was the best group trip we have ever done. The logistics were flawless, campfire evenings were magical, and the guides were entertaining and knowledgeable.",
    helpful: 45,
    verified: true
  },
  {
    name: "Meera Nair",
    city: "Kochi",
    date: "Oct 2024",
    group: "Family",
    overall: 4,
    guide: 5,
    trail: 3,
    food: 5,
    camping: 4,
    value: 4,
    safety: 5,
    body: "Trekked with my teenage son. The guides were patient and accommodating. Trail on Day 4 was trickier than we expected but guide managed it expertly. The meals were outstanding - best dal makhani I have had in years!",
    helpful: 19,
    verified: false
  }
];
const CATEGORY_RATINGS = [
  "Guide Quality",
  "Trail Conditions",
  "Food Quality",
  "Camping Setup",
  "Value for Money",
  "Safety"
];
function TrekReviewsTab({ trek }) {
  var _a;
  const [filter, setFilter] = reactExports.useState("All");
  const [expanded, setExpanded] = reactExports.useState(/* @__PURE__ */ new Set());
  const [helpful, setHelpful] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showWriteReview, setShowWriteReview] = reactExports.useState(false);
  MOCK_REVIEWS.reduce((a, r) => a + r.overall, 0) / MOCK_REVIEWS.length;
  const starCounts = [5, 4, 3, 2, 1].map(
    (star) => MOCK_REVIEWS.filter((r) => r.overall === star).length
  );
  const categoryAvgs = [
    "guide",
    "trail",
    "food",
    "camping",
    "value",
    "safety"
  ].map(
    (key) => (MOCK_REVIEWS.reduce(
      (a, r) => a + r[key],
      0
    ) / MOCK_REVIEWS.length).toFixed(1)
  );
  const toggleExpand = (i) => setExpanded((prev) => {
    const s = new Set(prev);
    s.has(i) ? s.delete(i) : s.add(i);
    return s;
  });
  const toggleHelpful = (i) => setHelpful((prev) => {
    const s = new Set(prev);
    s.has(i) ? s.delete(i) : s.add(i);
    return s;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-bold", style: { color: "#D4A843" }, children: (_a = trek.rating) == null ? void 0 : _a.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-1", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  color: s <= Math.round(trek.rating || 0) ? "#D4A843" : "#4A4A4A44"
                },
                children: "★"
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: [
              trek.reviewCount,
              " verified reviews"
            ] })
          ] })
        ] }),
        [5, 4, 3, 2, 1].map((star, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-sm w-6 text-right",
              style: { color: "#4A4A4A" },
              children: star
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#D4A843" }, children: "★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-1 h-2 rounded-full",
              style: { background: "rgba(255,255,255,0.9)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-2 rounded-full",
                  style: {
                    background: "#D4A843",
                    width: `${starCounts[i] / MOCK_REVIEWS.length * 100}%`
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs w-6", style: { color: "#4A4A4A" }, children: starCounts[i] })
        ] }, star))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-4", style: { color: "#1A1A1A" }, children: "Category Ratings" }),
        CATEGORY_RATINGS.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs w-28 flex-shrink-0",
              style: { color: "#4A4A4A" },
              children: cat
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-1 h-2 rounded-full",
              style: { background: "rgba(255,255,255,0.9)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-2 rounded-full",
                  style: {
                    background: "#F88379",
                    width: `${Number(categoryAvgs[i]) / 5 * 100}%`
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-xs w-8 text-right font-semibold",
              style: { color: "#1A1A1A" },
              children: categoryAvgs[i]
            }
          )
        ] }, cat))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      ["All", "5 Stars", "4 Stars", "Solo", "Family", "Group"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setFilter(f),
          className: "text-xs px-3 py-1.5 rounded-full",
          style: {
            background: filter === f ? "#F88379" : "rgba(255,255,255,0.9)",
            color: "#1A1A1A",
            border: `1px solid ${filter === f ? "#F88379" : "#4A4A4A33"}`
          },
          children: f
        },
        f
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setShowWriteReview(true),
          className: "ml-auto text-xs px-4 py-1.5 rounded-full",
          style: {
            background: "rgba(248,131,121,0.2)",
            color: "#F88379",
            border: "1px solid #F8837966"
          },
          children: "Write a Review"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: MOCK_REVIEWS.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-6 border",
        style: {
          background: "rgba(255,255,255,0.9)",
          borderColor: "#4A4A4A22"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold",
                style: { background: "#F88379", color: "#1A1A1A" },
                children: review.name[0]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", style: { color: "#1A1A1A" }, children: review.name }),
                review.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-2 py-0.5 rounded-full",
                    style: {
                      background: "rgba(45,80,22,0.3)",
                      color: "#4A7C2F"
                    },
                    children: "Verified Trekker"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-0.5", style: { color: "#4A4A4A" }, children: [
                review.city,
                " / ",
                review.date,
                " / ",
                review.group
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  color: s <= review.overall ? "#D4A843" : "#4A4A4A44"
                },
                children: "★"
              },
              s
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-sm leading-relaxed mb-4",
              style: { color: "#1A1A1A" },
              children: [
                expanded.has(i) || review.body.length <= 200 ? review.body : `${review.body.slice(0, 200)}...`,
                review.body.length > 200 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleExpand(i),
                    className: "ml-2 text-xs underline",
                    style: { color: "#4A4A4A" },
                    children: expanded.has(i) ? "Show less" : "Read more"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => toggleHelpful(i),
              className: "text-xs flex items-center gap-1",
              style: { color: helpful.has(i) ? "#F88379" : "#4A4A4A" },
              children: [
                "👍 Helpful (",
                review.helpful + (helpful.has(i) ? 1 : 0),
                ")"
              ]
            }
          ) })
        ]
      },
      review.name
    )) }),
    showWriteReview && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: { background: "rgba(255,255,255,0.95)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-8 w-full max-w-lg",
            style: { background: "#FFFFFF" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-2xl",
                    style: { color: "#1A1A1A" },
                    children: "Write a Review"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowWriteReview(false),
                    style: { color: "#4A4A4A" },
                    children: "✕"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-sm mb-4 px-4 py-3 rounded-xl",
                  style: { background: "rgba(248,131,121,0.1)", color: "#4A4A4A" },
                  children: "Please log in to write a review. Your experience helps future trekkers!"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/auth/login",
                  className: "block w-full text-center py-3 rounded-xl font-semibold",
                  style: { background: "#F88379", color: "#1A1A1A" },
                  children: "Log In to Write Review"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
const VIDEO_SECTIONS = [
  {
    title: "Trek Highlights Reel",
    desc: "3-minute cinematic overview of the full trek experience",
    duration: "3:12",
    views: "24.8K",
    thumb: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80"
  },
  {
    title: "Full Day Vlogs - Playlist",
    desc: "Day-by-day video logs from our previous trekkers",
    duration: "Playlist",
    views: "12.1K",
    thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
  },
  {
    title: "Guide Introduction",
    desc: "Lead guide speaks about what to expect on this trek",
    duration: "2:05",
    views: "8.3K",
    thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    title: "Safety Briefing Video",
    desc: "Complete safety protocols, altitude sickness prevention, emergency procedures",
    duration: "5:30",
    views: "18.2K",
    thumb: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
  },
  {
    title: "Trekker Testimonials",
    desc: "Before and after stories from trekkers who completed this trail",
    duration: "4:45",
    views: "31.6K",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
  },
  {
    title: "Drone Footage - Aerial",
    desc: "Breathtaking drone b-roll of the complete trek route from above",
    duration: "6:20",
    views: "45.2K",
    thumb: "https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=600&q=80"
  }
];
function TrekVideoTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl", style: { color: "#1A1A1A" }, children: [
      "Videos - ",
      trek.name
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: VIDEO_SECTIONS.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl overflow-hidden border group cursor-pointer",
        style: {
          background: "rgba(255,255,255,0.9)",
          borderColor: "#4A4A4A22"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: video.thumb,
                alt: video.title,
                className: "w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 flex items-center justify-center",
                style: { background: "rgba(255,255,255,0.5)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                    style: { background: "rgba(248,131,121,0.9)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl ml-1", style: { color: "#1A1A1A" }, children: "▶" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded",
                style: {
                  background: "rgba(255,255,255,0.9)",
                  color: "#1A1A1A"
                },
                children: video.duration
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-semibold text-sm mb-1",
                style: { color: "#1A1A1A" },
                children: video.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mb-2", style: { color: "#4A4A4A" }, children: video.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", style: { color: "#4A4A4A88" }, children: [
              video.views,
              " views"
            ] })
          ] })
        ]
      },
      video.title
    )) })
  ] });
}
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const MONTHLY_WEATHER = [
  {
    month: "Jan",
    low: -15,
    high: 5,
    condition: "Snow",
    status: "open",
    best: false
  },
  {
    month: "Feb",
    low: -12,
    high: 8,
    condition: "Snow",
    status: "open",
    best: false
  },
  {
    month: "Mar",
    low: -5,
    high: 12,
    condition: "Snow/Clear",
    status: "open",
    best: false
  },
  {
    month: "Apr",
    low: 2,
    high: 18,
    condition: "Clear",
    status: "open",
    best: true
  },
  {
    month: "May",
    low: 8,
    high: 22,
    condition: "Excellent",
    status: "open",
    best: true
  },
  {
    month: "Jun",
    low: 10,
    high: 20,
    condition: "Pre-Monsoon",
    status: "open",
    best: false
  },
  {
    month: "Jul",
    low: 8,
    high: 18,
    condition: "Monsoon",
    status: "caution",
    best: false
  },
  {
    month: "Aug",
    low: 7,
    high: 17,
    condition: "Monsoon",
    status: "caution",
    best: false
  },
  {
    month: "Sep",
    low: 5,
    high: 16,
    condition: "Post-Monsoon",
    status: "open",
    best: true
  },
  {
    month: "Oct",
    low: 0,
    high: 14,
    condition: "Clear",
    status: "open",
    best: false
  },
  {
    month: "Nov",
    low: -8,
    high: 6,
    condition: "Early Snow",
    status: "open",
    best: false
  },
  {
    month: "Dec",
    low: -14,
    high: 2,
    condition: "Snow",
    status: "open",
    best: false
  }
];
const HISTORICAL_DATA = MONTHS.map((m, i) => ({
  month: m,
  rainfall: [5, 3, 8, 12, 18, 45, 120, 100, 40, 10, 4, 3][i],
  snowfall: [80, 70, 40, 15, 5, 0, 0, 0, 0, 10, 50, 75][i]
}));
const FORECAST = [
  { day: "Mon", high: 8, low: -2, icon: "sun", precip: 5 },
  { day: "Tue", high: 6, low: -4, icon: "cloud", precip: 15 },
  { day: "Wed", high: 4, low: -6, icon: "snow", precip: 40 },
  { day: "Thu", high: 2, low: -8, icon: "snow", precip: 60 },
  { day: "Fri", high: 5, low: -5, icon: "cloud", precip: 20 },
  { day: "Sat", high: 9, low: -1, icon: "sun", precip: 5 },
  { day: "Sun", high: 11, low: 1, icon: "sun", precip: 5 }
];
const WEATHER_ICONS = {
  sun: "☀️",
  cloud: "⛅",
  snow: "❄️",
  rain: "🌧️"
};
function TrekWeatherTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: [
        "Current Weather — ",
        trek.startingPoint.split(",")[0]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#82C8E544"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl", children: "❄️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-4xl font-bold mb-1",
                  style: { color: "#1A1A1A" },
                  children: "-3°C"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", style: { color: "#4A4A4A" }, children: "Light Snowfall" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-1", style: { color: "#4A4A4A88" }, children: "Last updated: Just now" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-8 gap-y-2 ml-auto", children: [
              ["Humidity", "68%"],
              ["Wind", "12 km/h NW"],
              ["Visibility", "8 km"],
              ["UV Index", "3 (Low)"],
              ["Feels Like", "-8°C"],
              ["Condition", "Snowfall"]
            ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "text-sm font-semibold",
                  style: { color: "#1A1A1A" },
                  children: value
                }
              )
            ] }, label)) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "7-Day Forecast" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-2", children: FORECAST.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex-shrink-0 rounded-xl p-4 text-center min-w-[90px] border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A22"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-sm font-semibold mb-2",
                style: { color: "#1A1A1A" },
                children: day.day
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: WEATHER_ICONS[day.icon] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold", style: { color: "#1A1A1A" }, children: [
              day.high,
              "°"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", style: { color: "#82C8E5" }, children: [
              day.low,
              "°"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", style: { color: "#82C8E5" }, children: [
              day.precip,
              "%"
            ] })
          ]
        },
        day.day
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Monthly Weather Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-2", children: MONTHLY_WEATHER.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex-shrink-0 rounded-xl p-4 min-w-[110px] border relative",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: m.best ? "#D4A843" : "#4A4A4A22"
          },
          children: [
            m.best && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-2 left-1/2 -translate-x-1/2 text-xs px-2 py-0.5 rounded-full",
                style: { background: "#D4A843", color: "#E6D8C4" },
                children: "Best"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "font-bold text-sm mb-1",
                style: { color: "#1A1A1A" },
                children: m.month
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mb-1", style: { color: "#4A4A4A" }, children: [
              m.high,
              "° / ",
              m.low,
              "°"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-xs",
                style: {
                  color: m.status === "caution" ? "#D4A843" : "#82C8E5"
                },
                children: m.condition
              }
            )
          ]
        },
        m.month
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Altitude & AMS Warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(248,131,121,0.1)",
            borderColor: "#F8837966"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold mb-3", style: { color: "#F88379" }, children: [
              "AMS Risk at ",
              trek.maxAltitude.toLocaleString(),
              " ft (",
              trek.maxAltitudeM.toLocaleString(),
              " m)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm", style: { color: "#1A1A1A" }, children: "At altitudes above 10,000 ft, Acute Mountain Sickness can affect anyone regardless of fitness level. Know the signs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-semibold text-sm mb-3",
                    style: { color: "#4A4A4A" },
                    children: "Symptoms Checklist"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                  "Headache",
                  "Nausea or vomiting",
                  "Dizziness / lightheadedness",
                  "Fatigue beyond normal",
                  "Loss of appetite",
                  "Shortness of breath at rest"
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-sm",
                    style: { color: "#1A1A1A" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F88379" }, children: "●" }),
                      " ",
                      s
                    ]
                  },
                  s
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-semibold text-sm mb-3",
                    style: { color: "#4A4A4A" },
                    children: "What To Do"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                  "Stop ascending immediately",
                  "Inform your trek leader",
                  "Rest at current altitude",
                  "Drink 3-4 litres of water per day",
                  "Take Diamox if prescribed",
                  "Descend 500 ft if symptoms worsen"
                ].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2 text-sm",
                    style: { color: "#1A1A1A" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: "#82C8E5" }, children: [
                        idx + 1,
                        "."
                      ] }),
                      " ",
                      s
                    ]
                  },
                  s
                )) })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-5", style: { color: "#1A1A1A" }, children: "Historical Rainfall & Snowfall" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 border",
          style: {
            background: "rgba(255,255,255,0.9)",
            borderColor: "#4A4A4A33"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: HISTORICAL_DATA,
                margin: { top: 5, right: 10, bottom: 5, left: 10 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#4A4A4A11" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fill: "#4A4A4A", fontSize: 10 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fill: "#4A4A4A", fontSize: 10 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      contentStyle: {
                        background: "#E6D8C4",
                        border: "1px solid #4A4A4A44",
                        borderRadius: "8px",
                        color: "#1A1A1A"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "rainfall",
                      fill: "#82C8E5",
                      opacity: 0.8,
                      name: "Rainfall (mm)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "snowfall",
                      fill: "#1A1A1A",
                      opacity: 0.6,
                      name: "Snowfall (cm)"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 justify-center mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-xs",
                  style: { color: "#4A4A4A" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-3 h-3 rounded",
                        style: { background: "#82C8E5" }
                      }
                    ),
                    "Rainfall (mm)"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-xs",
                  style: { color: "#4A4A4A" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-3 h-3 rounded",
                        style: { background: "#1A1A1A" }
                      }
                    ),
                    "Snowfall (cm)"
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const TABS = [
  "Overview",
  "Itinerary",
  "Inclusions",
  "Pricing",
  "Photos",
  "Video",
  "Map & Route",
  "Weather",
  "Reviews",
  "FAQs",
  "Gear List",
  "Permits"
];
function TrekTabs({ trek }) {
  const [activeTab, setActiveTab] = reactExports.useState(0);
  const renderTab = () => {
    switch (activeTab) {
      case 0:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekOverviewTab, { trek });
      case 1:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekItineraryTab, { trek });
      case 2:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekInclusionsTab, { trek });
      case 3:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekPricingTab, { trek });
      case 4:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekPhotosTab, { trek });
      case 5:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekVideoTab, { trek });
      case 6:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekMapTab, { trek });
      case 7:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekWeatherTab, { trek });
      case 8:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekReviewsTab, { trek });
      case 9:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekFAQsTab, { trek });
      case 10:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekGearTab, { trek });
      case 11:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrekPermitsTab, { trek });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "sticky top-0 z-20 border-b overflow-x-auto",
        style: { background: "#E6D8C4", borderColor: "#4A4A4A22" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-max", children: TABS.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `trek.tab.${i + 1}`,
            onClick: () => setActiveTab(i),
            className: "px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors relative",
            style: { color: activeTab === i ? "#1A1A1A" : "#4A4A4A" },
            children: [
              tab,
              activeTab === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 right-0 h-0.5",
                  style: { background: "#F88379" }
                }
              )
            ]
          },
          tab
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-96", children: renderTab() })
  ] });
}
function getTrekData(slug) {
  const trek = TREKS.find((t) => t.slug === slug);
  if (!trek) return null;
  return {
    ...trek,
    highlights: [],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    faqs: [],
    gearList: { mandatory: [], recommended: [], rental: [] },
    permits: [],
    flora: [],
    fauna: [],
    uniqueFeatures: [],
    didYouKnow: "",
    nearestAttractions: [],
    fitnessLevel: 5,
    minAge: 12,
    maxAge: 65,
    galleryImages: []
  };
}
const DIFFICULTY_COLORS = {
  Easy: "#2D6A4F",
  Moderate: "#D4A843",
  Difficult: "#F88379",
  Extreme: "#8B0000"
};
function TrekDetailPage() {
  const { slug } = useParams({ from: "/treks/$slug" });
  const trek = getTrekData(slug);
  const [showStickyBar, setShowStickyBar] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!trek) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-screen",
        style: { background: "#E6D8C4", color: "#1A1A1A" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-4xl font-bold mb-4",
              style: { fontFamily: "var(--font-display)" },
              children: "Trek Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8", style: { color: "#4A4A4A" }, children: "We couldn't find the trek you're looking for." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/treks",
              className: "px-6 py-3 rounded-xl",
              style: { background: "#F88379", color: "#1A1A1A" },
              children: "View All Treks"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#E6D8C4", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 md:px-8 py-3 text-sm", style: { color: "#4A4A4A" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:underline", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/treks", className: "hover:underline", children: "Treks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1A1A1A" }, children: trek.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[70vh] min-h-[500px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: trek.heroImage,
          alt: trek.name,
          className: "absolute inset-0 w-full h-full object-cover",
          style: { filter: "brightness(0.55)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, transparent 40%, #E6D8C4 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-4 md:px-12 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "inline-block px-3 py-1 rounded-full text-xs font-bold mb-3",
            style: {
              background: DIFFICULTY_COLORS[trek.difficulty] ?? "#F88379",
              color: "#1A1A1A"
            },
            children: trek.difficulty
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-4xl md:text-7xl font-bold mb-2",
            style: {
              fontFamily: "var(--font-display)",
              color: "#1A1A1A",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)"
            },
            children: trek.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-lg md:text-xl mb-6",
            style: {
              fontFamily: "var(--font-accent, var(--font-display))",
              color: "#4A4A4A"
            },
            children: trek.tagline
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mb-6", children: [
          {
            label: "Duration",
            value: `${trek.durationDays}D / ${trek.durationNights}N`
          },
          {
            label: "Max Altitude",
            value: `${trek.maxAltitude.toLocaleString()} ft`
          },
          { label: "Distance", value: `${trek.trekDistance} km` },
          { label: "Best Time", value: trek.bestTime },
          { label: "Start", value: trek.startingPoint }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl px-4 py-2 text-sm",
            style: {
              background: "rgba(45,27,30,0.75)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(232,160,170,0.2)",
              color: "#1A1A1A"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    color: "#4A4A4A",
                    fontSize: "0.7rem",
                    display: "block"
                  },
                  children: s.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: s.value })
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-8", children: [
          trek.seatsAvailable !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "px-3 py-1 rounded-full text-xs font-medium",
              style: {
                background: trek.seatsAvailable <= 3 ? "rgba(248,131,121,0.3)" : "rgba(45,80,22,0.4)",
                color: trek.seatsAvailable <= 3 ? "#F88379" : "#A8D080",
                border: `1px solid ${trek.seatsAvailable <= 3 ? "#F8837955" : "#2D6A4F44"}`
              },
              children: [
                "🪑 ",
                trek.seatsAvailable,
                " Seats Left"
              ]
            }
          ),
          trek.rating && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "px-3 py-1 rounded-full text-xs font-medium",
              style: {
                background: "rgba(201,168,76,0.2)",
                color: "#D4A843",
                border: "1px solid #D4A84344"
              },
              children: [
                "⭐ ",
                trek.rating,
                "/5 (",
                trek.reviewCount,
                " reviews)"
              ]
            }
          ),
          trek.completedThisMonth && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "px-3 py-1 rounded-full text-xs font-medium",
              style: {
                background: "rgba(168,197,218,0.15)",
                color: "#82C8E5",
                border: "1px solid #82C8E533"
              },
              children: [
                "👥 ",
                trek.completedThisMonth,
                " trekkers this month"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/book/$slug",
              params: { slug: trek.slug },
              "data-ocid": "trek.book_button",
              className: "px-8 py-3.5 rounded-xl font-semibold text-base transition-opacity hover:opacity-90",
              style: { background: "#F88379", color: "#1A1A1A" },
              children: [
                "Book This Trek — ₹",
                trek.basePrice.toLocaleString()
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `/assets/itinerary-${trek.slug}.pdf`,
              "data-ocid": "trek.download_itinerary_button",
              className: "px-8 py-3.5 rounded-xl font-semibold text-base border transition-colors hover:bg-white/5",
              style: { borderColor: "#4A4A4A55", color: "#4A4A4A" },
              children: "Download Itinerary PDF"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "border-y overflow-x-auto",
        style: { background: "#FFFFFF", borderColor: "#4A4A4A22" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 px-6 py-3 min-w-max", children: [
          "ITBP-Certified Guides",
          "All Meals Included",
          "Premium Camping Gear",
          "High-Altitude Medical Kit",
          "Pickup/Drop Dehradun",
          "₹10L Group Insurance",
          "GPS Tracking Active",
          "24/7 Emergency Support"
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "flex items-center gap-1.5 text-xs whitespace-nowrap",
            style: { color: "#4A4A4A" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#2D6A4F" }, children: "✔" }),
              " ",
              item
            ]
          },
          item
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-xl mx-auto px-4 md:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrekTabs, { trek }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block w-80 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrekSidebar, { trek }) })
    ] }) }),
    showStickyBar && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 lg:hidden",
        style: {
          background: "rgba(45,27,30,0.97)",
          borderTop: "1px solid #4A4A4A33"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "#4A4A4A" }, children: "From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold", style: { color: "#D4A843" }, children: [
              "₹",
              trek.basePrice.toLocaleString()
            ] })
          ] }),
          trek.seatsAvailable !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-xs",
              style: {
                color: trek.seatsAvailable <= 3 ? "#F88379" : "#4A4A4A"
              },
              children: [
                trek.seatsAvailable,
                " seats left"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/book/$slug",
              params: { slug: trek.slug },
              "data-ocid": "trek.mobile_book_button",
              className: "px-6 py-2.5 rounded-xl font-semibold text-sm",
              style: { background: "#F88379", color: "#1A1A1A" },
              children: "Book Now"
            }
          )
        ]
      }
    )
  ] });
}
export {
  TrekDetailPage as default
};
