const contentSections = [
  { id: "home", title: "首页", tags: ["爱游戏", "热门推荐", "新游速递"] },
  { id: "news", title: "新闻中心", tags: ["爱游戏", "游戏资讯", "行业动态"] },
  { id: "reviews", title: "评测专区", tags: ["爱游戏", "游戏评测", "深度解析"] },
  { id: "guides", title: "攻略指南", tags: ["爱游戏", "攻略技巧", "通关秘籍"] },
  { id: "community", title: "玩家社区", tags: ["爱游戏", "讨论", "反馈"] },
  { id: "esports", title: "电竞频道", tags: ["爱游戏", "电竞赛事", "战队动态"] }
];

const siteMeta = {
  url: "https://sitezh-aiyouxi.com.cn",
  name: "爱游戏",
  version: "1.2.0"
};

function filterContentByTag(tag) {
  const results = [];
  for (const section of contentSections) {
    if (section.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))) {
      results.push(section);
    }
  }
  return results;
}

function searchSections(query) {
  const lowerQuery = query.toLowerCase();
  return contentSections.filter(section => {
    const matchTitle = section.title.toLowerCase().includes(lowerQuery);
    const matchTag = section.tags.some(t => t.toLowerCase().includes(lowerQuery));
    return matchTitle || matchTag;
  });
}

function getSectionById(id) {
  return contentSections.find(s => s.id === id) || null;
}

function getAllTags() {
  const tagSet = new Set();
  contentSections.forEach(s => s.tags.forEach(t => tagSet.add(t)));
  return Array.from(tagSet);
}

function generateSiteMap() {
  const map = {};
  contentSections.forEach(s => {
    map[s.id] = {
      title: s.title,
      tags: s.tags.slice(),
      url: `${siteMeta.url}/${s.id}`
    };
  });
  return map;
}

console.log("爱游戏 内容映射加载完毕");
console.log("站点:", siteMeta.url);
console.log("分区数量:", contentSections.length);
console.log("所有标签:", getAllTags().join(", "));