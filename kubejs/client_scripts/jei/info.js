// priority: 99
const itemsAndPages = [
  ["pneumaticcraft:pcb_blueprint", "可从工程师处交易获得（在充能站工作）。"],
  ["javd:portal_block", "敌对生物：在光照等级7以下生成。\n被动生物：不生成\n天气效果：无\n昼夜循环：永日"],
];


JEIEvents.information((event) => {
  for (let [item, info] of itemsAndPages) {
    event.addItem(item, info);
  }
});
