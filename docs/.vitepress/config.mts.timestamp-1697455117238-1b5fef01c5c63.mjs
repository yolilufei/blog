// docs/.vitepress/config.mts
import { defineConfig } from "file:///Users/lilufei/Documents/lilufei/ks/self/dive-into-css/node_modules/vitepress/dist/node/index.js";
import fs2 from "fs";
import path2 from "path";

// a.js
import fs from "fs";
import path from "path";
var listFiles = (dirName, tree2 = {}) => {
  try {
    const children = fs.readdirSync(dirName);
    children.forEach(async (child) => {
      const stat = fs.statSync(path.join(dirName, child));
      if (stat.isDirectory()) {
        let node = {
          text: child,
          items: []
        };
        files(path.join(dirName, child), node);
        tree2.items.push(node);
      } else {
        const node = {
          text: child,
          link: path.join(dirName, child)
        };
        tree2.items.push(node);
      }
    });
  } catch (e) {
    console.log(e);
  }
  return tree2;
};
var tree = { text: "CSS \u57FA\u7840", items: [] };
var test = listFiles(path.join(path.resolve("docs"), "./base"), tree);
console.log(JSON.stringify(test));
var a_default = listFiles;

// docs/.vitepress/config.mts
var __vite_injected_original_dirname = "/Users/lilufei/Documents/lilufei/ks/self/dive-into-css/docs/.vitepress";
var files2 = async (dirName) => {
  try {
    const r = await fs2.promises.readdir(dirName);
    fs2.promises.writeFile("a.log", JSON.stringify(r), "utf-8");
    return;
  } catch {
  }
};
await files2(path2.join(__vite_injected_original_dirname, "./base"));
var config_default = defineConfig({
  title: "better-css",
  description: "\u4E00\u8D77\u4E86\u89E3css\u7684\u4E16\u754C",
  base: "/better-css",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    logo: "../assets/css.jpeg",
    sidebar: [
      // {
      //   text: "CSS 基础",
      //   items: [
      //     {
      //       text: "基础属性",
      //       items: [
      //         {
      //           text: "user-select",
      //           link: "/base/properties/user-select",
      //         },
      //       ],
      //     },
      //     { text: "CSS @rules", items: [
      //       {
      //         text: 'support',
      //         link: "/base/rules/supports"
      //       }
      //     ] },
      //   ],
      // },
      a_default(path2.join(path2.resolve("docs"), "./base"), { text: "CSS \u57FA\u7840", items: [] }),
      {
        text: "CSS \u9884\u5904\u7406\u5668",
        items: [{ text: "less", link: "/preprocessors/less" }]
      },
      {
        text: "CSS \u9886\u57DF\u5E94\u7528",
        items: [{ text: "css in ant-design", link: "/implementation" }]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/yolilufei/better-css" }
    ],
    search: {
      provider: "local"
    },
    editLink: {
      pattern: "https://github.com/yolilufei/better-css.git",
      text: "Edit this page on Github"
    }
  },
  lastUpdated: true
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiYS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9saWx1ZmVpL0RvY3VtZW50cy9saWx1ZmVpL2tzL3NlbGYvZGl2ZS1pbnRvLWNzcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9saWx1ZmVpL0RvY3VtZW50cy9saWx1ZmVpL2tzL3NlbGYvZGl2ZS1pbnRvLWNzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGlsdWZlaS9Eb2N1bWVudHMvbGlsdWZlaS9rcy9zZWxmL2RpdmUtaW50by1jc3MvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGxpc3RGaWxlcyBmcm9tIFwiLi4vLi4vYVwiO1xuXG5jb25zdCBmaWxlcyA9IGFzeW5jIChkaXJOYW1lOiBmcy5QYXRoTGlrZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHIgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKGRpck5hbWUpO1xuICAgIGZzLnByb21pc2VzLndyaXRlRmlsZShcImEubG9nXCIsIEpTT04uc3RyaW5naWZ5KHIpLCBcInV0Zi04XCIpO1xuICAgIHJldHVybjtcbiAgfSBjYXRjaCB7XG4gICAgLy9cbiAgfVxufTtcblxuYXdhaXQgZmlsZXMocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL2Jhc2VcIikpO1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJiZXR0ZXItY3NzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlx1NEUwMFx1OEQ3N1x1NEU4Nlx1ODlFM2Nzc1x1NzY4NFx1NEUxNlx1NzU0Q1wiLFxuICBiYXNlOiBcIi9iZXR0ZXItY3NzXCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIC8vIG5hdjogW1xuICAgIC8vICAgeyB0ZXh0OiBcIkhvbWVcIiwgbGluazogXCIvXCIgfSxcbiAgICAvLyAgIHsgdGV4dDogXCJFeGFtcGxlc1wiLCBsaW5rOiBcIi9tYXJrZG93bi1leGFtcGxlc1wiIH0sXG4gICAgLy8gXSxcbiAgICBsb2dvOiBcIi4uL2Fzc2V0cy9jc3MuanBlZ1wiLFxuICAgIHNpZGViYXI6IFtcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgdGV4dDogXCJDU1MgXHU1N0ZBXHU3ODQwXCIsXG4gICAgICAvLyAgIGl0ZW1zOiBbXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgdGV4dDogXCJcdTU3RkFcdTc4NDBcdTVDNUVcdTYwMjdcIixcbiAgICAgIC8vICAgICAgIGl0ZW1zOiBbXG4gICAgICAvLyAgICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgICB0ZXh0OiBcInVzZXItc2VsZWN0XCIsXG4gICAgICAvLyAgICAgICAgICAgbGluazogXCIvYmFzZS9wcm9wZXJ0aWVzL3VzZXItc2VsZWN0XCIsXG4gICAgICAvLyAgICAgICAgIH0sXG4gICAgICAvLyAgICAgICBdLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIkNTUyBAcnVsZXNcIiwgaXRlbXM6IFtcbiAgICAgIC8vICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgdGV4dDogJ3N1cHBvcnQnLFxuICAgICAgLy8gICAgICAgICBsaW5rOiBcIi9iYXNlL3J1bGVzL3N1cHBvcnRzXCJcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICBdIH0sXG4gICAgICAvLyAgIF0sXG4gICAgICAvLyB9LFxuICAgICAgbGlzdEZpbGVzKHBhdGguam9pbiggcGF0aC5yZXNvbHZlKCdkb2NzJyksIFwiLi9iYXNlXCIpLCB7IHRleHQ6ICdDU1MgXHU1N0ZBXHU3ODQwJywgaXRlbXM6IFtdfSksXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQ1NTIFx1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFwiLFxuICAgICAgICBpdGVtczogW3sgdGV4dDogXCJsZXNzXCIsIGxpbms6IFwiL3ByZXByb2Nlc3NvcnMvbGVzc1wiIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDU1MgXHU5ODg2XHU1N0RGXHU1RTk0XHU3NTI4XCIsXG4gICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiBcImNzcyBpbiBhbnQtZGVzaWduXCIsIGxpbms6IFwiL2ltcGxlbWVudGF0aW9uXCIgfV0sXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS95b2xpbHVmZWkvYmV0dGVyLWNzc1wiIH0sXG4gICAgXSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnXG4gICAgfSxcbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS95b2xpbHVmZWkvYmV0dGVyLWNzcy5naXQnLFxuICAgICAgdGV4dDogJ0VkaXQgdGhpcyBwYWdlIG9uIEdpdGh1YidcbiAgICB9XG4gIH0sXG4gIGxhc3RVcGRhdGVkOiB0cnVlXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2xpbHVmZWkvRG9jdW1lbnRzL2xpbHVmZWkva3Mvc2VsZi9kaXZlLWludG8tY3NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbGlsdWZlaS9Eb2N1bWVudHMvbGlsdWZlaS9rcy9zZWxmL2RpdmUtaW50by1jc3MvYS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGlsdWZlaS9Eb2N1bWVudHMvbGlsdWZlaS9rcy9zZWxmL2RpdmUtaW50by1jc3MvYS5qc1wiO2ltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGxpc3RGaWxlcyA9IChkaXJOYW1lLCB0cmVlID0ge30pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBmcy5yZWFkZGlyU3luYyhkaXJOYW1lKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goYXN5bmMgY2hpbGQgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMocGF0aC5qb2luKGRpck5hbWUsIGNoaWxkKSk7XG4gICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGNoaWxkLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWxlcyhwYXRoLmpvaW4oZGlyTmFtZSwgY2hpbGQpLCBub2RlKVxuICAgICAgICAgICAgdHJlZS5pdGVtcy5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaGlsZCxcbiAgICAgICAgICAgICAgICBsaW5rOiBwYXRoLmpvaW4oZGlyTmFtZSwgY2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cmVlLml0ZW1zLnB1c2gobm9kZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIC8vXG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9IFxuICAgIHJldHVybiB0cmVlXG4gIH07XG5jb25zdCB0cmVlID0geyB0ZXh0OiAnQ1NTIFx1NTdGQVx1Nzg0MCcsIGl0ZW1zOiBbXX07XG5jb25zdCB0ZXN0ID0gbGlzdEZpbGVzKHBhdGguam9pbiggcGF0aC5yZXNvbHZlKCdkb2NzJyksIFwiLi9iYXNlXCIpLCB0cmVlKTtcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRlc3QpKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdEZpbGVzOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFgsU0FBUyxvQkFBb0I7QUFDelosT0FBT0EsU0FBUTtBQUNmLE9BQU9DLFdBQVU7OztBQ0YrUyxPQUFPLFFBQVE7QUFDL1UsT0FBTyxVQUFVO0FBRWpCLElBQU0sWUFBWSxDQUFDLFNBQVNDLFFBQU8sQ0FBQyxNQUFNO0FBQ3RDLE1BQUk7QUFDRixVQUFNLFdBQVcsR0FBRyxZQUFZLE9BQU87QUFDdkMsYUFBUyxRQUFRLE9BQU0sVUFBUztBQUM5QixZQUFNLE9BQU8sR0FBRyxTQUFTLEtBQUssS0FBSyxTQUFTLEtBQUssQ0FBQztBQUNsRCxVQUFJLEtBQUssWUFBWSxHQUFHO0FBQ3BCLFlBQUksT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDO0FBQUEsUUFDWjtBQUVBLGNBQU0sS0FBSyxLQUFLLFNBQVMsS0FBSyxHQUFHLElBQUk7QUFDckMsUUFBQUEsTUFBSyxNQUFNLEtBQUssSUFBSTtBQUFBLE1BQ3hCLE9BQU87QUFDSCxjQUFNLE9BQU87QUFBQSxVQUNULE1BQU07QUFBQSxVQUNOLE1BQU0sS0FBSyxLQUFLLFNBQVMsS0FBSztBQUFBLFFBQ2xDO0FBQ0EsUUFBQUEsTUFBSyxNQUFNLEtBQUssSUFBSTtBQUFBLE1BQ3hCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxTQUFRLEdBQUc7QUFFVCxZQUFRLElBQUksQ0FBQztBQUFBLEVBQ2Y7QUFDQSxTQUFPQTtBQUNUO0FBQ0YsSUFBTSxPQUFPLEVBQUUsTUFBTSxvQkFBVSxPQUFPLENBQUMsRUFBQztBQUN4QyxJQUFNLE9BQU8sVUFBVSxLQUFLLEtBQU0sS0FBSyxRQUFRLE1BQU0sR0FBRyxRQUFRLEdBQUcsSUFBSTtBQUN2RSxRQUFRLElBQUksS0FBSyxVQUFVLElBQUksQ0FBQztBQUVoQyxJQUFPLFlBQVE7OztBRGxDZixJQUFNLG1DQUFtQztBQUt6QyxJQUFNQyxTQUFRLE9BQU8sWUFBeUI7QUFDNUMsTUFBSTtBQUNGLFVBQU0sSUFBSSxNQUFNQyxJQUFHLFNBQVMsUUFBUSxPQUFPO0FBQzNDLElBQUFBLElBQUcsU0FBUyxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsR0FBRyxPQUFPO0FBQ3pEO0FBQUEsRUFDRixRQUFRO0FBQUEsRUFFUjtBQUNGO0FBRUEsTUFBTUQsT0FBTUUsTUFBSyxLQUFLLGtDQUFXLFFBQVEsQ0FBQztBQUcxQyxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTVgsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXFCUCxVQUFVQSxNQUFLLEtBQU1BLE1BQUssUUFBUSxNQUFNLEdBQUcsUUFBUSxHQUFHLEVBQUUsTUFBTSxvQkFBVSxPQUFPLENBQUMsRUFBQyxDQUFDO0FBQUEsTUFDbEY7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU8sQ0FBQyxFQUFFLE1BQU0sUUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQUEsTUFDdkQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLHFCQUFxQixNQUFNLGtCQUFrQixDQUFDO0FBQUEsTUFDaEU7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLDBDQUEwQztBQUFBLElBQ3BFO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhO0FBQ2YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZnMiLCAicGF0aCIsICJ0cmVlIiwgImZpbGVzIiwgImZzIiwgInBhdGgiXQp9Cg==
