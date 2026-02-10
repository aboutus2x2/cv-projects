function Comment() {

  const [content, setContent] = React.useState('')

    //原创 或 转载模式选择
    const [sendstyle, setSendstyle] = React.useState('')

    //保存草稿
    function savePublish() {

    }

    //发送
    function publish() {

    }

  return (
    <>
      <nav className="navbar bg-light border">
        <div className="d-flex hstack gap-1">
          <div className="text-decoration-underline">朋友</div>
          <div className="text-decoration-underline">图片</div>
          <div className="text-decoration-underline">表情</div>
          <div className="text-decoration-underline">视频</div>
          <div className="text-decoration-underline">投票</div>
        </div>
        <div>
          草稿箱
        </div>
      </nav>
      <textarea className="form-control" rows="10" defaultValue={content} onChange={(ev) => { setContent(ev.target.value) }}></textarea>
      <div className="row">
        <div className="col">
          请遵守公约言论规则，不得违反国家法律法规
        </div>
        <div className="col text-end">
          <div className="form-check-inline">
            <input type="radio" id="tips" name="tips" className="form-check-input" value="orginal"
              checked={sendstyle === 'orginal'} onChange={(ev) => { setSendstyle(ev.target.value) }} />
            <label className="form-check-label" htmlFor="tips">原创</label>
          </div>
          <div className="form-check-inline">
            <input type="radio" id="tips" name="tips" className="form-check-input" value="transport"
              checked={sendstyle === 'transport'} onChange={(ev) => { setSendstyle(ev.target.value) }} />
            <label className="form-check-label" htmlFor="tips">转载</label>
          </div>
          <button className="btn btn-sm btn-outline-primary" onClick={savePublish}>保存草稿</button>
          <button className="btn btn-sm btn-primary" onClick={publish}>发表(Ctrl+Enter)</button>
        </div>
      </div>
    </>
  )
}