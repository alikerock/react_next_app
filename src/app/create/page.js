export default function Create() {
  return (
    <form>
      <p>
        <input type="text" name="title" placeholder="title"/>
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>        
      </p>  
      <p>
        <button>전송</button>
      </p>
    </form>
  );
}
