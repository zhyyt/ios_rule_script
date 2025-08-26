// 文件名: modify-html.js
// 功能: 修改HTML响应内容

// 定义要修改的URL模式

if (!$response.body) $done({});
let body = $response.body;

function modifyResponse(body) {
  let modifiedBody = body;
  
  // 修改页面标题
  modifiedBody = modifiedBody.replace(
   // <div class="item-identity">[\s\S]*?<dt>이름<\/dt>[\s\S]*?<dd>([\s\S]*?)<\/dd>
    //<div class="item-identity">\s*<dt>본인인증일<\/dt>\s*<dd>(\d{4}\.\d{2}\.\d{2})<\/dd>
    /<dd>2025.02.03<\/dd>/, 
    '<dd>2025.02.29<\/dd>'
  );
    
  return modifiedBody;
}

 // 如果是HTML内容，则进行修改
    if ($response.headers['Content-Type'] && 
        $response.headers['Content-Type'].includes('text/html')) {
      body = modifyResponse(body.toString());
      
    }
     $done({body});
     else {

    $done({});


