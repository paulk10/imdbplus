import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="https://1dbb886b.sibforms.com/serve/MUIEAEXK1N8UeTJcQ55aYijH0yiIkH1WoozB8yNzOTg6BwhGfHNVDIftZmyBa6EuhmlkAsTM4J7oTwKhX6DJ0fQmryzQrQ3xB_rpGTL505D694DnVlFzBTVHgP-clhcOvB46SLP-CnFLy0ZjdgHe8vuCT64zNlaUJGW5IaA0f5WV1J1TDiEd35HWGFWHX_CWuGYgvKx4ducikVsg" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
    </div>
  );
};

export default EmailOptin;
