#### viewport 相关的长度单位

- vmin 视口高度 vw 和宽度 vh 两者之间的最小值
- vmax 视口高度 vw 和宽度 vh 两者之间的最大值

#### 示例一

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header
      style="
        padding: 10vmax 1rem;
        background-color: red;
        color: #fff;
        text-align: center;
        font-size: 2rem;
      "
    >
        Header
    </header>
  </body>
</html>
```
在 chrome 模拟h5环境下的效果：
1. iphone XR  宽高：414*896    
    [iphone XR][1]  
    [盒模型][2]

2. Nest Hub  宽高：1024*600 
   
   [Nest Hub][3]    
   [盒模型][4]












[1]: ../assets/vmin-1.png
[2]: ../assets/vmin-2.png
[3]: ../assets/vmin-3.png
[4]: ../assets/vmin-4.png