const pdf = require("pdf-creator-node")
const fs = require('fs');
let s = `<div id="View1" block-ui="main" class="appView animated"><button id="Button1" ng-class="Button1.Class" tabIndex="{{Button1.TabIndex}}" title="{{Button1.Title}}" ng-hide="Button1.Hidden" ng-disabled="Button1.Disabled" uib-tooltip="{{Button1.TooltipText}}" tooltip-placement="{{Button1.TooltipPos}}" popover-trigger="{{Button1.PopoverEvent}}" popover-placement="{{Button1.PopoverPos}}" popover-title="{{Button1.PopoverTitle}}" uib-popover="{{Button1.PopoverText}}" ng-bind-html="'<span class=&quot;'+Button1.Icon+'&quot;></span> ' + Button1.Text"></button><div id="HtmlContent1" ng-class="HtmlContent1.Class" ng-hide="HtmlContent1.Hidden" title="{{HtmlContent1.Title}}" tooltip-placement="{{HtmlContent1.TooltipPos}}" uib-tooltip="{{HtmlContent1.TooltipText}}" popover-trigger="{{HtmlContent1.PopoverEvent}}" popover-placement="{{HtmlContent1.PopoverPos}}" popover-title="{{HtmlContent1.PopoverTitle}}" uib-popover="{{HtmlContent1.PopoverText}}">HtmlContent1</div><button id="Button2" ng-class="Button2.Class" tabIndex="{{Button2.TabIndex}}" title="{{Button2.Title}}" ng-hide="Button2.Hidden" ng-disabled="Button2.Disabled" uib-tooltip="{{Button2.TooltipText}}" tooltip-placement="{{Button2.TooltipPos}}" popover-trigger="{{Button2.PopoverEvent}}" popover-placement="{{Button2.PopoverPos}}" popover-title="{{Button2.PopoverTitle}}" uib-popover="{{Button2.PopoverText}}" ng-bind-html="'<span class=&quot;'+Button2.Icon+'&quot;></span> ' + Button2.Text"></button></div>
`
pdf.create({html:s, data:{users:{}}, path:"./res.pdf"}, { format:"A4"}).then(x=>{
console.log(x);

})

