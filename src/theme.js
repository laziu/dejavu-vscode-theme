const { palette, invert, mix } = require("./util");

function getTheme({ style, name }) {
  const colors = palette(style);
  const pick = (options) => options[style];

  const workbenchForeground = pick({ light: colors.gray[8], dark: colors.gray[7] });
  const editorForeground = pick({ light: colors.gray[9], dark: colors.gray[7] });

  return {
    name: name,
    colors: {
      focusBorder: pick({ light: colors.blue[4], dark: colors.blue[3] }),
      foreground: pick({ light: colors.gray[7], dark: colors.gray[6] }),
      descriptionForeground: colors.gray[5],
      errorForeground: colors.red[6],

      "textLink.foreground": pick({ light: colors.blue[5], dark: colors.blue[6] }),
      "textLink.activeForeground": pick({ light: colors.blue[6], dark: colors.blue[7] }),
      "textBlockQuote.background": colors.white,
      "textBlockQuote.border": colors.gray[1],
      "textCodeBlock.background": colors.gray[0],
      "textPreformat.foreground": colors.gray[6],
      "textSeparator.foreground": colors.gray[2],

      "button.background": pick({ light: colors.green[6], dark: colors.green[3] }),
      "button.foreground": pick({ light: colors.white, dark: colors.green[8] }),
      "button.hoverBackground": pick({ light: colors.green[7], dark: colors.green[2] }),

      "checkbox.background": colors.gray[0],
      "checkbox.border": pick({ light: colors.gray[3], dark: colors.white }),

      "dropdown.background": colors.gray[0],
      "dropdown.border": pick({ light: colors.gray[3], dark: colors.white }),
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": colors.white,

      "input.background": colors.gray[0],
      "input.border": pick({ light: colors.gray[3], dark: colors.white }),
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": pick({ light: colors.gray[4], dark: colors.gray[5] }),

      "badge.foreground": pick({ light: colors.blue[6], dark: colors.blue[7] }),
      "badge.background": pick({ light: colors.blue[1], dark: colors.blue[2] }),

      "progressBar.background": colors.blue[4],

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "titleBar.inactiveForeground": colors.gray[5],
      "titleBar.inactiveBackground": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "titleBar.border": pick({ light: colors.gray[2], dark: colors.white }),

      "activityBar.foreground": workbenchForeground,
      "activityBar.inactiveForeground": colors.gray[4],
      "activityBar.background": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "activityBarBadge.foreground": pick({ light: colors.white, dark: colors.black }),
      "activityBarBadge.background": colors.blue[4],
      "activityBar.activeBorder": "#f9826c",
      "activityBar.border": pick({ light: colors.gray[2], dark: colors.white }),

      "sideBar.foreground": colors.gray[6],
      "sideBar.background": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "sideBar.border": pick({ light: colors.gray[2], dark: colors.white }),
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "sideBarSectionHeader.border": pick({ light: colors.gray[2], dark: colors.white }),

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": mix(colors.gray[1], colors.gray[0], 0.5),
      "list.inactiveSelectionBackground": mix(colors.gray[1], colors.gray[0], 0.4),
      "list.activeSelectionBackground": mix(colors.gray[2], colors.gray[1], 0.5),
      "list.inactiveFocusBackground": pick({ light: colors.blue[1], dark: "#1d2d3e" }),
      "list.focusBackground": pick({ light: "#cce5ff", dark: colors.blue[2] }),

      "tree.indentGuidesStroke": pick({ light: colors.gray[2], dark: colors.gray[0] }),

      "notificationCenterHeader.foreground": colors.gray[5],
      "notificationCenterHeader.background": pick({ light: colors.gray[2], dark: mix(colors.gray[0], "#000", 0.4) }),
      "notifications.foreground": workbenchForeground,
      "notifications.background": colors.gray[0],
      "notifications.border": pick({ light: colors.gray[2], dark: colors.white }),
      "notificationsErrorIcon.foreground": colors.red[5],
      "notificationsWarningIcon.foreground": colors.orange[6],
      "notificationsInfoIcon.foreground": colors.blue[6],

      "pickerGroup.border": pick({ light: colors.gray[2], dark: colors.gray[1] }),
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": pick({ light: colors.gray[0], dark: mix(colors.gray[0], "#000", 0.4) }),
      "quickInput.foreground": workbenchForeground,

      "statusBar.foreground": colors.gray[6],
      "statusBar.background": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "statusBar.border": pick({ light: colors.gray[2], dark: colors.white }),
      "statusBar.noFolderBackground": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "statusBar.debuggingBackground": pick({ light: "#f9826c", dark: invert("#f9826c") }),
      "statusBar.debuggingForeground": pick({ light: colors.white, dark: colors.black }),
      "statusBarItem.prominentBackground": mix(colors.gray[1], colors.gray[0], 0.4),

      "editorGroupHeader.tabsBackground": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "editorGroupHeader.tabsBorder": pick({ light: colors.gray[2], dark: colors.white }),
      "editorGroup.border": pick({ light: colors.gray[2], dark: colors.white }),

      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": colors.gray[5],
      "tab.inactiveBackground": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "tab.activeBackground": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "tab.hoverBackground": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "tab.unfocusedHoverBackground": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "tab.border": pick({ light: colors.gray[2], dark: colors.white }),
      "tab.unfocusedActiveBorderTop": pick({ light: colors.gray[2], dark: colors.white }),
      "tab.activeBorder": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "tab.unfocusedActiveBorder": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "tab.activeBorderTop": "#f9826c",

      "breadcrumb.foreground": colors.gray[5],
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": colors.gray[6],
      "breadcrumbPicker.background": colors.gray[0],

      "editor.foreground": editorForeground,
      "editor.background": pick({ light: colors.white, dark: mix(colors.gray[0], "#000", 0.4) }),
      "editorWidget.background": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "editor.foldBackground": pick({ light: colors.gray[0], dark: colors.gray[0] }),
      "editor.lineHighlightBorder": pick({ light: colors.gray[1], dark: colors.gray[0] }),
      "editorLineNumber.foreground": pick({ light: "#1b1f234d", dark: colors.gray[1] }),
      "editorLineNumber.activeForeground": editorForeground,
      "editorIndentGuide.background": pick({ light: "#eff2f6", dark: colors.gray[0] }),
      "editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: colors.gray[1] }),
      "editorWhitespace.foreground": pick({ light: colors.gray[3], dark: colors.gray[1] }),
      "editorCursor.foreground": colors.blue[7],

      "editor.findMatchBackground": pick({ light: colors.yellow[4], dark: "#ffd33d44" }),
      "editor.findMatchHighlightBackground": pick({ light: "#ffdf5d66", dark: "#ffd33d22" }),
      "editor.inactiveSelectionBackground": pick({ light: "#0366d611", dark: "#3392FF22" }),
      "editor.selectionBackground": pick({ light: "#0366d625", dark: "#3392FF44" }),
      "editor.selectionHighlightBackground": pick({ light: "#34d05840", dark: "#17E5E633" }),
      "editor.selectionHighlightBorder": pick({ light: "#34d05800", dark: "#17E5E600" }),
      "editor.wordHighlightBackground": pick({ light: "#34d05822", dark: "#17E5E622" }),
      "editor.wordHighlightStrongBackground": pick({ light: "#34d05822", dark: "#17E5E622" }),
      "editor.wordHighlightBorder": pick({ light: "#24943e11", dark: "#17E5E611" }),
      "editor.wordHighlightStrongBorder": pick({ light: "#24943e11", dark: "#17E5E611" }),
      "editorBracketMatch.background": pick({ light: "#34d05840", dark: "#17E5E650" }),
      "editorBracketMatch.border": pick({ light: "#34d05800", dark: "#17E5E600" }),

      "editorGutter.modifiedBackground": pick({ light: colors.blue[4], dark: colors.blue[5] }),
      "editorGutter.addedBackground": pick({ light: colors.green[5], dark: colors.green[4] }),
      "editorGutter.deletedBackground": colors.red[5],

      "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74530" }),
      "diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#d73a4930" }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
      "scrollbarSlider.background": pick({ light: "#959da533", dark: "#6a737d33" }),
      "scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#6a737d44" }),
      "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88" }),
      "editorOverviewRuler.border": colors.white,

      "panel.background": pick({ light: colors.gray[1], dark: mix(colors.gray[0], "#000", 0.3) }),
      "panel.border": pick({ light: colors.gray[2], dark: colors.white }),
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": colors.gray[5],
      "panelInput.border": pick({ light: colors.gray[2], dark: colors.gray[0] }),

      "terminal.foreground": colors.gray[6],

      "gitDecoration.addedResourceForeground": colors.green[5],
      "gitDecoration.modifiedResourceForeground": colors.blue[6],
      "gitDecoration.deletedResourceForeground": colors.red[5],
      "gitDecoration.untrackedResourceForeground": colors.green[5],
      "gitDecoration.ignoredResourceForeground": colors.gray[4],
      "gitDecoration.conflictingResourceForeground": colors.orange[6],
      "gitDecoration.submoduleResourceForeground": colors.gray[4],

      "debugToolBar.background": pick({ light: colors.white, dark: mix(colors.gray[1], colors.gray[0], 0.5) }),
      "editor.stackFrameHighlightBackground": pick({ light: colors.yellow[1], dark: "#a707" }),
      "editor.focusedStackFrameHighlightBackground": pick({ light: colors.yellow[2], dark: "#b808" }),

      "peekViewEditor.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewEditor.background": pick({ dark: `${mix(colors.gray[0], "#000", 0.3)}88` }),
      "peekViewResult.background": pick({ dark: mix(colors.gray[0], "#000", 0.3) }),

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": colors.blue[4],
      "welcomePage.buttonBackground": pick({ light: colors.gray[1], dark: colors.gray[0] }),
      "welcomePage.buttonHoverBackground": pick({ light: colors.gray[2], dark: colors.gray[1] }),
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({ light: colors.gray[4], dark: colors.gray[4] }),
        },
      },
      {
        name: "parentheses, tuple, brackets of XML/HTML tags",
        scope: [
          "punctuation.definition.tag",
          "punctuation.terminator.statement",
          "punctuation.definition.parameters",
          "meta.brace.round",
        ],
        settings: {
          foreground: pick({ light: colors.gray[4], dark: colors.gray[5] }),
        },
      },
      {
        name: "null, undefined, etc.",
        scope: "constant.language",
        settings: {
          foreground: colors.red[6],
        },
      },
      {
        name: "this.self",
        scope: "variable.language",
        settings: {
          foreground: colors.red[6],
        },
      },
      {
        name: "Control flow / Special keywords",
        scope: [
          "keyword.control",
          "source.cpp keyword.operator.new",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.operator",
          "entity.name.operator",
        ],
        settings: {
          foreground: pick({
            light: colors.purple[5],
            dark: colors.purple[6],
          }),
        },
      },
      {
        name: "Keyword",
        scope: [
          "keyword",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
          "meta.preprocessor",
          "entity.name.function.preprocessor",
          "storage",
          "storage.type",
          "storage.modifier",
        ],
        settings: {
          foreground: colors.red[6],
        },
      },
      {
        name: "Variable, parameter, object keys",
        scope: [
          "variable",
          "support.variable",
          "entity.name.variable",
          "meta.definition.variable.name",
          "entity.other.attribute-name",
          "meta.object-literal.key",
          "meta.structure.dictionary.key.python",
          "support.type.vendored.property-name",
          "support.type.property-name",
          "source.coffee.embedded",
        ],
        settings: {
          foreground: colors.blue[7],
        },
      },
      {
        name: "Constants and enums",
        scope: [
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "constant.other.database-name",
        ],
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        name: "Types declaration and references",
        scope: [
          "meta.return-type",
          "support.class",
          "support.type",
          "entity.name.type",
          "entity.name.namespace",
          "entity.other.attribute",
          "entity.name.scope-resolution",
          "entity.name.class",
          "storage.type.numeric.go",
          "storage.type.byte.go",
          "storage.type.boolean.go",
          "storage.type.string.go",
          "storage.type.uintptr.go",
          "storage.type.error.go",
          "storage.type.rune.go",
          "storage.type.cs",
          "storage.type.generic.cs",
          "storage.type.modifier.cs",
          "storage.type.variable.cs",
          "storage.type.annotation.java",
          "storage.type.generic.java",
          "storage.type.java",
          "storage.type.object.array.java",
          "storage.type.primitive.array.java",
          "storage.type.primitive.java",
          "storage.type.token.java",
          "storage.type.groovy",
          "storage.type.annotation.groovy",
          "storage.type.parameters.groovy",
          "storage.type.generic.groovy",
          "storage.type.object.array.groovy",
          "storage.type.primitive.array.groovy",
          "storage.type.primitive.groovy",
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.constant.math",
          "support.constant.dom",
          "support.constant.json",
          "entity.other.inherited-class",
        ],
        settings: {
          foreground: colors.green[6],
        },
      },
      {
        name: "Function declarations",
        scope: [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars",
          "source.powershell variable.other.member",
          "entity.name.operator.custom-literal", // See https://en.cppreference.com/w/cpp/language/user_literal
        ],
        settings: {
          foreground: pick({ light: colors.yellow[9], dark: colors.yellow[7] }),
        },
      },
      {
        name: "Numeric",
        scope: [
          "constant.numeric",
          "variable.other.enummember",
          "meta.preprocessor.numeric",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent",
          "keyword.other.unit",
        ],
        settings: {
          foreground: pick({ light: colors.green[5], dark: colors.green[7] }),
        },
      },
      {
        name: "String",
        scope: [
          "string",
          "meta.preprocessor.string",
          "meta.embedded.assembly",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: colors.orange[6],
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: colors.yellow[4],
        },
      },
      {
        scope: ["constant.other.placeholder"],
        settings: {
          foreground: colors.orange[7],
        },
      },
      {
        name: "Regexp",
        scope: [
          "constant.regexp",
          "source.regexp",
          "string.regexp",
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp",
          "keyword.operator.quantifier.regexp",
        ],
        settings: {
          foreground: colors.orange[5],
        },
      },
      {
        name: "Regular expression groups",
        scope: [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp",
        ],
        settings: {
          foreground: colors.orange[6],
        },
      },
      {
        scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
        settings: {
          foreground: colors.red[7],
        },
      },
      {
        name: "C/Java character",
        scope: ["constant.character", "string.quoted.single.cpp", "string.quoted.single.java"],
        settings: {
          foreground: colors.red[6],
        },
      },
      {
        name: "Reset JavaScript string interpolation expression",
        scope: ["meta.template.expression"],
        settings: {
          foreground: colors.gray[7],
        },
      },
      {
        name: "String interpolation",
        scope: [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded",
        ],
        settings: {
          foreground: pick({ light: colors.purple[5], dark: colors.purple[6] }),
        },
      },
      {
        name: "coloring of the Java import and package identifiers",
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
          "variable.language.wildcard.java",
        ],
        settings: {
          foreground: colors.gray[6],
        },
      },
      {
        scope: "entity.name.label",
        settings: {
          foreground: colors.gray[7],
        },
      },
      {
        name: "HTML tag",
        scope: "entity.name.tag",
        settings: {
          foreground: colors.red[6],
        },
      },
      {
        name: "CSS property value",
        scope: [
          "support.constant.property-value",
          "support.constant.font-name",
          "support.constant.media-type",
          "support.constant.media",
          "constant.other.color.rgb-value",
          "constant.other.rgb-value",
          "support.constant.color",
        ],
        settings: {
          foreground: colors.orange[6],
        },
      },
      {
        name: "CSS tag",
        scope: "entity.name.tag.css",
        settings: {
          foreground: pick({ light: colors.yellow[8], dark: colors.yellow[4] }),
        },
      },
      {
        name: "CSS class/selector",
        scope: [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.mixin.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "source.css.less entity.other.attribute-name.id",
          "entity.other.attribute-name.scss",
        ],
        settings: {
          foreground: pick({ light: colors.yellow[7], dark: colors.yellow[5] }),
        },
      },
      {
        scope: ["meta.embedded", "source.groovy.embedded"],
        settings: {
          foreground: pick({ light: colors.black, dark: colors.gray[7] }),
        },
      },
      {
        name: "pre block",
        scope: ["markup.raw", "markup.fenced_code.block"],
        settings: {
          foreground: pick({ light: colors.gray[6], dark: mix(colors.gray[6], colors.gray[5], 0.5) }),
        },
      },
      {
        scope: "invalid",
        settings: {
          foreground: "#ff3333",
        },
      },
      {
        scope: "markup.underline",
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["strong", "markup.bold"],
        settings: {
          fontStyle: "bold",
          foreground: pick({ light: "#000", dark: "#fff" }),
        },
      },
      {
        scope: "markup.heading",
        settings: {
          fontStyle: "bold",
          foreground: colors.blue[6],
        },
      },
      {
        scope: ["header", "meta.diff.header"],
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: ["emphasis", "markup.italic"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: colors.green[7],
        },
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: colors.orange[6],
        },
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: ["markup.quote", "punctuation.definition.quote.begin.markdown"],
        settings: {
          foreground: colors.green[6],
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: colors.blue[6],
        },
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: colors.orange[6],
        },
      },
      {
        scope: ["keyword.operator", "punctuation.accessor"],
        settings: {
          foreground: colors.pink[7],
        },
      },
      {
        scope: "support.function.git-rebase",
        settings: {
          foreground: colors.blue[7],
        },
      },
      {
        scope: "constant.sha.git-rebase",
        settings: {
          foreground: colors.green[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({ light: colors.red[5], dark: colors.red[6] }),
          foreground: colors.gray[0],
          content: "^M",
        },
      },
    ],
    semanticTokenColors: {
      newOperator: pick({ light: colors.purple[5], dark: colors.purple[6] }),
      stringLiteral: colors.orange[6],
      customLiteral: pick({ light: colors.yellow[9], dark: colors.yellow[7] }),
      numberLiteral: pick({ light: colors.green[5], dark: colors.green[7] }),
    },
  };
}

module.exports = getTheme;
