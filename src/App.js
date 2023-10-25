import logo from "./assets/logo.png";
import "./App.css";
import img2 from "./assets/image1.png";
import menu1 from "./assets/menu1.png";
import menu2 from "./assets/menu2.png";
import menu3 from "./assets/menu3.png";
import instagram from './assets/instagram.svg';
import whatsapp from './assets/whatsapp.svg';

function App() {
  // const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       {
  //         from_name: form.name,
  //         to_name: "Sandra",
  //         from_email: form.email,
  //         to_email: "sandraantony2002@gmail.com",
  //         message: form.message,
  //       },
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <div className="App">
      <div class="cover-image">
        <div src={logo} className="logo" />
        <div className="main">
          <div className="main-heading">WELCOME OUR GUEST</div>
          <div className="main-caption">
            Enjoy Delicious &<br /> Authentic Cuisine
          </div>
          <a
            href="https://drive.google.com/file/d/1UnuvbZcf8qnVAPjdczOhFk3F2OW4k_x4/view?usp=sharing"
            target="_blank"
          >
            <button>DISCOVER OUR MENU</button>
          </a>
        </div>
      </div>
      <div className="div2">
        <div className="div2-heading">
          <p className="div2-heading1">INTRODUCTION OF US</p>
          <p className="div2-heading2">
            Good things come to those who cook for others
          </p>
        </div>
        <div className="div2-main">
          <div className="div2-image">
            <img src={img2} />
          </div>
          <br />
          <div className="div2-para">
            <p>
              Nestled in Kochi, Pomodoro offers a culinary journey to Italy with
              every bite. Crafted by passionate chefs, our dishes use fresh,
              local ingredients, promising an authentic experience in a cozy
              setting. Dive into a world of pasta masterpieces and experience
              Italy, right here at Pomodoro. Buon appetito!
            </p>
            <button>MORE ABOUT US</button>
          </div>
        </div>
      </div>
      <div className="div3">
        <h1 className="menu-div-h1">Our Menu</h1>
        <div className="menu-div">
          <img src={menu1} />
          <img src={menu2} />
          <img src={menu3} />
        </div>
      </div>
      <div className="div4">
        {/* <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
        <div className="div4-p">
        <img src={instagram}/>
          <p>thepomodoroo</p>
          <br/>
          <p>||</p>
          <br/>
          <img src={whatsapp}/>
          <p>+91 7012359850</p>
        </div>
      </div>
    </div>
  );
}

export default App;
