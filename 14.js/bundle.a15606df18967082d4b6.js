webpackJsonp([14],{1416:function(n,e,o){var t=o(0),r=o(8),p=o(9).PageRenderer;p.__esModule&&(p=p.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1449)}},componentWillMount:function(){},render:function(){return t.createElement(p,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,n.exports=a},1449:function(n,e){n.exports='Given the default `shouldComponentUpdate` for `Table` body can be somewhat strict, it is possible to override it with a custom handler. If you set `true` instead, then it will skip `shouldComponentUpdate` check entirely.\n\n**Example:**\n\n```javascript\nconst BodyWrapper = props => <tbody {...props} />;\nBodyWrapper.shouldComponentUpdate = function (nextProps, nextState, nextContext) {\n  // Perform a custom check now\n  // this.props is available here too\n  return true;\n};\n// You can also use\n// BodyWrapper.shouldComponentUpdate = true;\nconst RowWrapper = props => <tr {...props} />;\nRowWrapper.shouldComponentUpdate = function (nextProps) {\n  // Perform a custom check now\n  // this.props is available here too\n  return true;\n};\n// RowWrapper.shouldComponentUpdate = true;\n\n...\n\n<Table.Provider\n  columns={columns}\n  components={{\n    body: {\n      wrapper: BodyWrapper,\n      row: RowWrapper\n    }\n  }}\n>\n  <Table.Body\n    rows={rows}\n    rowKey="name"\n  />\n</Table.Provider>\n```\n'}});