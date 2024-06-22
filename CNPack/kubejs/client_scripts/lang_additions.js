ClientEvents.lang("en_us", (event) => {
  const rename = (item, newName) => event.add(Item.of(item).item.getDescriptionId(), newName);
  //存疑 这是干嘛的？中文要不要取消下面的？是国际化用的吗？？？
  //event.add("gas.kubejs.chlorine_infused_gas", "Chrlorine Infused Gas");
  //rename("create_new_age:overcharged_gold", "Overcharged Electrum");

});
