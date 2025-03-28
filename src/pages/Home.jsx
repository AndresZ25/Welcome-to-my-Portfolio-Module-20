import Andres from '../assets/images/AndresZuniga.jpg';

export default function Home() {
  return (
    <div className="container">
      <div className='d-flex flex-column'>
        <div className="d-block p-4 mb-4">
          <h2 className="float-start" style={{fontSize:2.8+'em'}}></h2>
        </div>
        <div>
          <img src={Andres} style={{width:16+200}} className='float-start my-2'></img>
          <p className="p-1 ms-5 lh-lg" style={{fontSize:1.2+'em'}}>Hi there ! My name is Andres. I'm an aspiring full-stack web developer on a journey to becoming a well-rounded and versatile developer. 
            This website highlights some of the projects I've built so far, and I'm excited to keep learning, growing, and building even more in the future.</p>
          <p className='p-1 ms-5 lh-lg'style={{fontSize:1.2+'em'}}>Feel free to reach out through the contact form, and don’t forget to check out my resume to see my skills and experience in more detail.</p>
        </div>
      </div>
    </div>
  );
}