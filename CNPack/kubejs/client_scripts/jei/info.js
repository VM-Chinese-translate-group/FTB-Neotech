// priority: 99
const itemsAndPages = [
  ["pneumaticcraft:pcb_blueprint", "info.pneumaticcraft.pcb_blueprint"],
  ["javd:portal_block", "info.javd.portal_block"],
];


JEIEvents.information((event) => {
  for (let [item, info] of itemsAndPages) {
    event.addItem(item, Component.translate(info));
  }
});
