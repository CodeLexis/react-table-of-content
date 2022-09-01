import { useState, useEffect, createElement, Fragment } from 'react';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var HEADING_TAGS = ['', '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>'];

var ContentNode = /*#__PURE__*/function () {
  function ContentNode(tag, text, children, parent) {
    if (children === void 0) {
      children = [];
    }

    if (parent === void 0) {
      parent = null;
    }

    this.children = [];
    this.parent = null;
    this.tag = null;
    this.text = null;
    this.tag = tag;
    this.text = text;
    this.children = children;
    this.parent = parent;
  }

  var _proto = ContentNode.prototype;

  _proto.toJson = function toJson() {
    var _this$text, _this$text2, _ref;

    return _ref = {}, _ref[((_this$text = this.text) === null || _this$text === void 0 ? void 0 : _this$text.slice(4, ((_this$text2 = this.text) === null || _this$text2 === void 0 ? void 0 : _this$text2.length) - 5)) || ''] = this.children.map(function (value) {
      return value.toJson();
    }), _ref;
  };

  _proto.add = function add(node) {
    node.parent = this;
    this.children.push(node);
  };

  _proto.getParent = function getParent(prev) {
    while (true) {
      if (prev.parent == null || HEADING_TAGS.indexOf(prev.tag || '') < HEADING_TAGS.indexOf(this.tag || '')) {
        return prev;
      }

      prev = prev.parent;
    }
  };

  _proto.padding = function padding(count, segment) {
    var result = '';
    var i = 0;

    while (i < count) {
      result += segment;
      count += 1;
    }

    return result;
  };

  _createClass(ContentNode, [{
    key: "cleanText",
    get: function get() {
      var result = this.text;

      if (result == null) {
        return null;
      }

      return result.slice(4, (result === null || result === void 0 ? void 0 : result.length) - 5);
    }
  }]);

  return ContentNode;
}();

function cleanup(htmlMarkup) {
  htmlMarkup = htmlMarkup.trim();

  if (!htmlMarkup) {
    return htmlMarkup;
  }

  if (htmlMarkup.startsWith('<h4>')) {
    var a = htmlMarkup.split('</h4>');
    a = a.slice(1);
    return a.join('</h4>');
  } else if (htmlMarkup.startsWith('<h3>')) {
    var _a = htmlMarkup.split('</h3>');

    _a = _a.slice(1);
    return _a.join('</h3>');
  }

  return htmlMarkup;
}

function generateTableOfContent(htmlMarkup) {
  htmlMarkup = cleanup(htmlMarkup);
  var root = new ContentNode('', '');
  var prev = root;
  var interimTag = null;
  var interimText = null;
  var i = 0;

  while (i < htmlMarkup.length) {
    if (htmlMarkup[i] === '<' && HEADING_TAGS.includes(htmlMarkup.slice(i, i + 4))) {
      interimTag = htmlMarkup.slice(i, i + 4);
      interimText = htmlMarkup.slice(i, i + 4);
      i += 4;
      continue;
    } else if (interimTag != null && htmlMarkup[i] === '<' && htmlMarkup.slice(i, i + 5) === '</' + interimTag.slice(1)) {
      interimText += htmlMarkup.slice(i, i + 5);
      var newNode = new ContentNode(interimTag, interimText || '');
      var parent = newNode.getParent(prev);
      parent.add(newNode);
      prev = newNode;
      interimText = null;
      i += 5;
      continue;
    } else if (interimText != null) {
      interimText += htmlMarkup[i];
    }

    i += 1;
  }

  return root;
}

var createIdForTableOfContentHeading = function createIdForTableOfContentHeading(heading) {
  if (!heading) {
    return;
  }

  return encodeURIComponent(heading.toLowerCase().replaceAll(' ', '-'));
};

var TableOfContentsTree = function TableOfContentsTree(_ref) {
  var _node$children;

  var node = _ref.node;
  console.log("At " + (node.cleanText || 'root') + " with children " + JSON.stringify((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.map(function (_) {
    return _.cleanText;
  })));
  if (node === null || node === undefined) return createElement(Fragment, null);
  return createElement(Fragment, null, node.cleanText && createElement("li", null, createElement("a", {
    href: "#" + createIdForTableOfContentHeading(node.cleanText)
  }, node.cleanText)), node.children && node.children.length > 0 && createElement("ul", null, node.children.map(function (value) {
    return createElement(TableOfContentsTree, {
      key: value.cleanText,
      node: value
    });
  })));
};

var TableOfContents = function TableOfContents(_ref2) {
  var content = _ref2.content;

  var _useState = useState(),
      tableOfContentsRoot = _useState[0],
      setTableOfContentsRoot = _useState[1];

  useEffect(function () {
    var tableOfContentsRoot = generateTableOfContent(content);
    setTableOfContentsRoot(tableOfContentsRoot);
  }, [content]);
  return createElement("div", null, createElement("div", null, tableOfContentsRoot !== undefined && createElement(TableOfContentsTree, {
    node: tableOfContentsRoot
  })));
};

export default TableOfContents;
//# sourceMappingURL=index.modern.js.map
