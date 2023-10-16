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
    sidebar: a_default(path2.join(path2.resolve("docs"), "./base"), { text: "CSS \u57FA\u7840", items: [] }),
    // [
    //   {
    //     text: "CSS 基础",
    //     items: [
    //       {
    //         text: "基础属性",
    //         items: [
    //           {
    //             text: "user-select",
    //             link: "/base/properties/user-select",
    //           },
    //         ],
    //       },
    //       { text: "CSS @rules", items: [
    //         {
    //           text: 'supports',
    //           link: "/base/rules/supports"
    //         }
    //       ] },
    //     ],
    //   },
    //   {
    //     text: "CSS 预处理器",
    //     items: [{ text: "less", link: "/preprocessors/less" }],
    //   },
    //   {
    //     text: "CSS 领域应用",
    //     items: [{ text: "css in ant-design", link: "/implementation" }],
    //   },
    // ],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiYS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9saWx1ZmVpL0RvY3VtZW50cy9saWx1ZmVpL2tzL3NlbGYvZGl2ZS1pbnRvLWNzcy9kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9saWx1ZmVpL0RvY3VtZW50cy9saWx1ZmVpL2tzL3NlbGYvZGl2ZS1pbnRvLWNzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGlsdWZlaS9Eb2N1bWVudHMvbGlsdWZlaS9rcy9zZWxmL2RpdmUtaW50by1jc3MvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGxpc3RGaWxlcyBmcm9tIFwiLi4vLi4vYVwiO1xuXG5jb25zdCBmaWxlcyA9IGFzeW5jIChkaXJOYW1lOiBmcy5QYXRoTGlrZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHIgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKGRpck5hbWUpO1xuICAgIGZzLnByb21pc2VzLndyaXRlRmlsZShcImEubG9nXCIsIEpTT04uc3RyaW5naWZ5KHIpLCBcInV0Zi04XCIpO1xuICAgIHJldHVybjtcbiAgfSBjYXRjaCB7XG4gICAgLy9cbiAgfVxufTtcblxuYXdhaXQgZmlsZXMocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL2Jhc2VcIikpO1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJiZXR0ZXItY3NzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlx1NEUwMFx1OEQ3N1x1NEU4Nlx1ODlFM2Nzc1x1NzY4NFx1NEUxNlx1NzU0Q1wiLFxuICBiYXNlOiBcIi9iZXR0ZXItY3NzXCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIC8vIG5hdjogW1xuICAgIC8vICAgeyB0ZXh0OiBcIkhvbWVcIiwgbGluazogXCIvXCIgfSxcbiAgICAvLyAgIHsgdGV4dDogXCJFeGFtcGxlc1wiLCBsaW5rOiBcIi9tYXJrZG93bi1leGFtcGxlc1wiIH0sXG4gICAgLy8gXSxcbiAgICBsb2dvOiBcIi4uL2Fzc2V0cy9jc3MuanBlZ1wiLFxuICAgIHNpZGViYXI6IGxpc3RGaWxlcyhwYXRoLmpvaW4oIHBhdGgucmVzb2x2ZSgnZG9jcycpLCBcIi4vYmFzZVwiKSwgeyB0ZXh0OiAnQ1NTIFx1NTdGQVx1Nzg0MCcsIGl0ZW1zOiBbXX0pLFxuICAgIC8vIFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogXCJDU1MgXHU1N0ZBXHU3ODQwXCIsXG4gICAgLy8gICAgIGl0ZW1zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgdGV4dDogXCJcdTU3RkFcdTc4NDBcdTVDNUVcdTYwMjdcIixcbiAgICAvLyAgICAgICAgIGl0ZW1zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiBcInVzZXItc2VsZWN0XCIsXG4gICAgLy8gICAgICAgICAgICAgbGluazogXCIvYmFzZS9wcm9wZXJ0aWVzL3VzZXItc2VsZWN0XCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgeyB0ZXh0OiBcIkNTUyBAcnVsZXNcIiwgaXRlbXM6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgdGV4dDogJ3N1cHBvcnRzJyxcbiAgICAvLyAgICAgICAgICAgbGluazogXCIvYmFzZS9ydWxlcy9zdXBwb3J0c1wiXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgXSB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdGV4dDogXCJDU1MgXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XCIsXG4gICAgLy8gICAgIGl0ZW1zOiBbeyB0ZXh0OiBcImxlc3NcIiwgbGluazogXCIvcHJlcHJvY2Vzc29ycy9sZXNzXCIgfV0sXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICB0ZXh0OiBcIkNTUyBcdTk4ODZcdTU3REZcdTVFOTRcdTc1MjhcIixcbiAgICAvLyAgICAgaXRlbXM6IFt7IHRleHQ6IFwiY3NzIGluIGFudC1kZXNpZ25cIiwgbGluazogXCIvaW1wbGVtZW50YXRpb25cIiB9XSxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3lvbGlsdWZlaS9iZXR0ZXItY3NzXCIgfSxcbiAgICBdLFxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL3lvbGlsdWZlaS9iZXR0ZXItY3NzLmdpdCcsXG4gICAgICB0ZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0aHViJ1xuICAgIH1cbiAgfSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWVcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGlsdWZlaS9Eb2N1bWVudHMvbGlsdWZlaS9rcy9zZWxmL2RpdmUtaW50by1jc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9saWx1ZmVpL0RvY3VtZW50cy9saWx1ZmVpL2tzL3NlbGYvZGl2ZS1pbnRvLWNzcy9hLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9saWx1ZmVpL0RvY3VtZW50cy9saWx1ZmVpL2tzL3NlbGYvZGl2ZS1pbnRvLWNzcy9hLmpzXCI7aW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuY29uc3QgbGlzdEZpbGVzID0gKGRpck5hbWUsIHRyZWUgPSB7fSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGZzLnJlYWRkaXJTeW5jKGRpck5hbWUpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChhc3luYyBjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhwYXRoLmpvaW4oZGlyTmFtZSwgY2hpbGQpKTtcbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB7XG4gICAgICAgICAgICAgICAgdGV4dDogY2hpbGQsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZpbGVzKHBhdGguam9pbihkaXJOYW1lLCBjaGlsZCksIG5vZGUpXG4gICAgICAgICAgICB0cmVlLml0ZW1zLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6IGNoaWxkLFxuICAgICAgICAgICAgICAgIGxpbms6IHBhdGguam9pbihkaXJOYW1lLCBjaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyZWUuaXRlbXMucHVzaChub2RlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgLy9cbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0gXG4gICAgcmV0dXJuIHRyZWVcbiAgfTtcbmNvbnN0IHRyZWUgPSB7IHRleHQ6ICdDU1MgXHU1N0ZBXHU3ODQwJywgaXRlbXM6IFtdfTtcbmNvbnN0IHRlc3QgPSBsaXN0RmlsZXMocGF0aC5qb2luKCBwYXRoLnJlc29sdmUoJ2RvY3MnKSwgXCIuL2Jhc2VcIiksIHRyZWUpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGVzdCkpO1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0RmlsZXM7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE0WCxTQUFTLG9CQUFvQjtBQUN6WixPQUFPQSxTQUFRO0FBQ2YsT0FBT0MsV0FBVTs7O0FDRitTLE9BQU8sUUFBUTtBQUMvVSxPQUFPLFVBQVU7QUFFakIsSUFBTSxZQUFZLENBQUMsU0FBU0MsUUFBTyxDQUFDLE1BQU07QUFDdEMsTUFBSTtBQUNGLFVBQU0sV0FBVyxHQUFHLFlBQVksT0FBTztBQUN2QyxhQUFTLFFBQVEsT0FBTSxVQUFTO0FBQzlCLFlBQU0sT0FBTyxHQUFHLFNBQVMsS0FBSyxLQUFLLFNBQVMsS0FBSyxDQUFDO0FBQ2xELFVBQUksS0FBSyxZQUFZLEdBQUc7QUFDcEIsWUFBSSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixPQUFPLENBQUM7QUFBQSxRQUNaO0FBRUEsY0FBTSxLQUFLLEtBQUssU0FBUyxLQUFLLEdBQUcsSUFBSTtBQUNyQyxRQUFBQSxNQUFLLE1BQU0sS0FBSyxJQUFJO0FBQUEsTUFDeEIsT0FBTztBQUNILGNBQU0sT0FBTztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLO0FBQUEsUUFDbEM7QUFDQSxRQUFBQSxNQUFLLE1BQU0sS0FBSyxJQUFJO0FBQUEsTUFDeEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNILFNBQVEsR0FBRztBQUVULFlBQVEsSUFBSSxDQUFDO0FBQUEsRUFDZjtBQUNBLFNBQU9BO0FBQ1Q7QUFDRixJQUFNLE9BQU8sRUFBRSxNQUFNLG9CQUFVLE9BQU8sQ0FBQyxFQUFDO0FBQ3hDLElBQU0sT0FBTyxVQUFVLEtBQUssS0FBTSxLQUFLLFFBQVEsTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJO0FBQ3ZFLFFBQVEsSUFBSSxLQUFLLFVBQVUsSUFBSSxDQUFDO0FBRWhDLElBQU8sWUFBUTs7O0FEbENmLElBQU0sbUNBQW1DO0FBS3pDLElBQU1DLFNBQVEsT0FBTyxZQUF5QjtBQUM1QyxNQUFJO0FBQ0YsVUFBTSxJQUFJLE1BQU1DLElBQUcsU0FBUyxRQUFRLE9BQU87QUFDM0MsSUFBQUEsSUFBRyxTQUFTLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxHQUFHLE9BQU87QUFDekQ7QUFBQSxFQUNGLFFBQVE7QUFBQSxFQUVSO0FBQ0Y7QUFFQSxNQUFNRCxPQUFNRSxNQUFLLEtBQUssa0NBQVcsUUFBUSxDQUFDO0FBRzFDLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNWCxNQUFNO0FBQUEsSUFDTixTQUFTLFVBQVVBLE1BQUssS0FBTUEsTUFBSyxRQUFRLE1BQU0sR0FBRyxRQUFRLEdBQUcsRUFBRSxNQUFNLG9CQUFVLE9BQU8sQ0FBQyxFQUFDLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdDM0YsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSwwQ0FBMEM7QUFBQSxJQUNwRTtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsYUFBYTtBQUNmLENBQUM7IiwKICAibmFtZXMiOiBbImZzIiwgInBhdGgiLCAidHJlZSIsICJmaWxlcyIsICJmcyIsICJwYXRoIl0KfQo=
