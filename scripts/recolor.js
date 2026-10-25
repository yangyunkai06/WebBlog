// 主题色统一替换：Butterfly 默认蓝 #49b1f5 → 浅绿 #79c98e
// 挂在 after_render:css 上，对全站所有编译产出的 CSS 生效（含 CSS 变量与暗色模式）
hexo.extend.filter.register('after_render:css', (data) =>
  data.replace(/#49b1f5/gi, '#79c98e')
);
