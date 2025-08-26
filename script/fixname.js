// 文件名: modify-html.js
// 功能: 修改HTML响应内容

// 定义要修改的URL模式

if (!$response.body) $done({});
let body = $response.body.toString();

body = body.replace(
   // <div class="item-identity">[\s\S]*?<dt>이름<\/dt>[\s\S]*?<dd>([\s\S]*?)<\/dd>
    //<div class="item-identity">\s*<dt>본인인증일<\/dt>\s*<dd>(\d{4}\.\d{2}\.\d{2})<\/dd>
    /2025.02.03/, 
    '2025.02.29'
  );
$done({body}); 
 


 
  





