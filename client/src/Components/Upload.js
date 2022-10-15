import { UploadDiv, UploadForm, UploadButtonDiv } from '../Style/uploadCSS.js';

const Upload = ({ contentList, setContentList, content, setContent }) => {
  const onSubmit = () => {
    let tempArr = [...contentList];
    tempArr.push(content);
    setContentList([...tempArr]);
    setContent('');
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor=''>제목</label>
        <input
          id='title'
          type='text'
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <label htmlFor=''>내용</label>
        <textarea
          id='content'
          type='text'
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            제출
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;
