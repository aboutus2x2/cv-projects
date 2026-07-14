# jsonp 跨域
jsonp跨域原理：

利用 `<script>` 标签的 src 属性不受跨域影响的特性，使用 `<script>` 标签访问接口，这种方式就是 jsonp

jsonp 的限制在于，由于使用的是标签访问接口，所以该接口只能是 get 请求

jsonp 跨域请求的script标签src中 必须包含 callback 参数，该参数指定一个回调函数的名称
