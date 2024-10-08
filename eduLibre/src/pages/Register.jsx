import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    cedula: '',
    edad: '',
    nombre: '',
    email: '',
    password: '',
    rol: 'Estudiante'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validations = [
      { condition: formData.cedula.trim() === '', message: 'Por favor ingrese un número de cédula válido.' },
      { condition: isNaN(formData.edad) || formData.edad <= 0, message: 'Por favor ingrese una edad válida.' },
      { condition: formData.nombre.trim() === '', message: 'Por favor ingrese un nombre válido.' },
      { condition: !formData.email.includes('@'), message: 'Por favor ingrese un correo electrónico válido.' },
      { condition: formData.password.length < 6, message: 'La contraseña debe tener al menos 6 caracteres.' }
    ];

    for (let validation of validations) {
      if (validation.condition) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: validation.message,
        });
        return;
      }
    }

    try {
      // Simulated API call - replace URL_DEL_BACKEND with your actual backend URL
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Bienvenido a EduLibre!',
        }).then(() => {
          navigate('/selection');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error en el registro',
        });
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error en el servidor. Intente nuevamente.',
      });
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <div className="header">
          <div className="logo">
            <svg width="57" height="53" viewBox="0 0 57 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              {<svg width="57" height="53" viewBox="0 0 57 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.1808 46.865L10.7775 52.8182C9.25735 53.1363 7.73719 52.182 7.40465 50.6823L1.22899 21.9613C0.896455 20.507 1.89406 19.0528 3.46173 18.7347L33.865 12.7814C33.9125 12.8269 41.1808 46.865 41.1808 46.865Z" fill="#424242"/>
                                <path d="M41.4183 42.4568L9.87491 48.6373C8.35475 48.9554 6.83459 48.0011 6.50205 46.5014L0.136369 16.7351C-0.196166 15.2809 0.801441 13.8267 2.36911 13.5085L33.9125 7.32806L41.4183 42.4568Z" fill="url(#paint0_linear_438_24)"/>
                                <path d="M13.0103 48.0012L9.92243 48.5919C8.40227 48.9101 6.8821 47.9557 6.54957 46.456L0.183885 16.7352C-0.14865 15.281 0.848957 13.8267 2.41663 13.5086L5.50446 12.9178L13.0103 48.0012Z" fill="#424242"/>
                                <path opacity="0.2" d="M32.8199 8.96407L39.8031 41.4116C39.5181 41.5025 39.3281 41.6843 39.1381 41.9115C38.948 42.2296 38.853 42.5932 38.948 42.9113L39.5656 45.7743L10.0649 51.5458C10.0174 51.5458 9.92243 51.5458 9.87492 51.5458C9.44738 51.5458 9.11484 51.2731 9.01983 50.955L8.11723 46.7286L2.55914 21.1887L1.41901 15.9171C1.324 15.5081 1.65654 15.0537 2.1791 14.9628L32.8199 8.96407ZM33.9125 7.32806L1.89406 13.6449C0.611427 13.8721 -0.19616 15.0537 0.0413653 16.1898L1.18149 21.4614L6.69208 47.0922L7.59468 51.2731C7.8322 52.2729 8.7823 53 9.87492 53C10.0174 53 10.2075 53 10.35 52.9545L41.2283 46.9104L40.3257 42.684L41.4658 42.4568L33.9125 7.32806Z" fill="#424242"/>
                                <path d="M39.4231 46.1379L10.4925 51.8184C9.58989 52.0002 8.7348 51.4549 8.54478 50.5914V50.5006C8.35476 49.6371 8.92482 48.8191 9.82742 48.6373L38.758 42.9567L39.4231 46.1379Z" fill="url(#paint1_linear_438_24)"/>
                                <path d="M44.6011 43.2749L13.6278 40.4119C12.0601 40.2755 10.92 38.9122 11.0625 37.4125L14.0554 8.00977C14.1979 6.51009 15.623 5.41942 17.1432 5.55576L48.1165 8.46422C48.164 8.41877 44.6011 43.2749 44.6011 43.2749Z" fill="#424242"/>
                                <path d="M46.0738 38.9576L13.9603 35.9583C12.3927 35.8219 11.7276 34.4586 11.8701 32.9589L14.4829 2.46552C14.6254 0.965845 16.0506 -0.124829 17.5707 0.0115055L49.6842 3.01086C49.7317 3.01086 46.0738 38.9576 46.0738 38.9576Z" fill="url(#paint2_linear_438_24)"/>
                                <path d="M49.7317 3.01086L21.5137 0.465953L17.8558 36.3673L13.9603 35.9583C12.3927 35.8219 11.7276 34.4586 11.8701 32.9589L14.4829 2.46552C14.6254 0.965845 16.0506 -0.124829 17.6182 0.0115055L49.7317 3.01086Z" fill="#424242"/>
                                <path opacity="0.2" d="M17.0007 1.51114H17.0957L48.259 4.4196L44.8862 37.5942C44.6011 37.6397 44.3161 37.7306 44.0786 37.9124C43.7936 38.1396 43.6035 38.5031 43.556 38.8667L43.271 41.7752L13.2953 38.9576C13.0577 38.9121 12.8202 38.8212 12.6777 38.6395C12.5827 38.5486 12.4402 38.3668 12.4877 38.0941L12.9152 33.7769L15.5755 7.55529L16.1456 2.19281C16.1931 1.78381 16.5731 1.51114 17.0007 1.51114ZM17.0007 0.102356C15.813 0.102356 14.7679 0.920361 14.6729 2.05648L14.5779 7.41895L11.9176 33.6405L11.015 37.9578C10.8725 39.1394 11.8226 40.23 13.1528 40.3209L44.6011 43.2294L45.0287 38.9121L46.2163 39.003L49.8742 3.10171L17.2382 0.102356C17.1907 0.102356 17.0957 0.102356 17.0007 0.102356Z" fill="#424242"/>
                                <path d="M43.176 42.0479L13.7228 39.3212C12.8202 39.2303 12.1551 38.4578 12.2502 37.5943V37.5034C12.3452 36.64 13.1528 36.0038 14.0554 36.0946L43.5085 38.8213L43.176 42.0479Z" fill="url(#paint3_linear_438_24)"/>
                                <path d="M56.2874 49.9098L27.2618 52.3638C25.6941 52.5002 24.3165 51.364 24.174 49.9098L21.5137 21.2342C21.3712 19.7345 22.5588 18.4166 24.1265 18.2803L53.1521 15.8263C53.1521 15.7808 56.2874 49.9098 56.2874 49.9098Z" fill="#424242"/>
                                <path d="M57 45.5926L26.8818 48.1375C25.3141 48.2738 23.9365 47.1377 23.7939 45.6834L21.0386 15.9626C20.8961 14.4629 22.0838 13.145 23.6514 13.0087L53.7697 10.4638C53.7222 10.4183 57 45.5926 57 45.5926Z" fill="url(#paint4_linear_438_24)"/>
                                <path d="M30.4922 47.8193L26.3592 48.1829C25.0291 48.0466 23.9365 47.0468 23.7939 45.7289L21.0386 16.008C20.8961 14.5084 22.0838 13.1905 23.6514 13.0541L27.2618 12.736L30.4922 47.8193Z" fill="#424242"/>
                                <path opacity="0.2" d="M52.4395 11.918L55.4323 44.411C54.8147 44.5928 54.3872 45.1835 54.4347 45.8198L54.7197 48.6828L26.5017 51.0914C26.5017 51.0914 26.4542 51.0914 26.4067 51.0914C26.0266 51.0914 25.6466 50.7732 25.5991 50.4097L25.2191 46.1833L22.8438 20.5071L22.3688 15.2355C22.3213 14.8265 22.6538 14.4629 23.0813 14.4175L52.4395 11.918ZM53.7696 10.4183L23.0338 13.0087C21.7987 13.0996 20.8961 14.1448 21.0386 15.2809L21.5137 20.5525L23.8889 46.2288L24.269 50.4551C24.364 51.5458 25.3141 52.3638 26.4542 52.3638H26.6442L56.2874 49.8643L55.9074 45.638L57 45.5471L53.7696 10.4183Z" fill="#424242"/>
                                <path d="M54.7197 48.9554L26.9292 51.3185C26.0742 51.4094 25.3616 50.7732 25.2666 50.0006V49.728C25.1716 48.91 25.8366 48.2283 26.6442 48.1374L54.4347 45.7743C54.4347 45.8197 54.7197 48.9554 54.7197 48.9554Z" fill="url(#paint5_linear_438_24)"/>
                                <defs>
                                <linearGradient id="paint0_linear_438_24" x1="16.7483" y1="10.796" x2="23.6859" y2="46.1226" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0079465" stop-color="#FF9800"/>
                                <stop offset="1" stop-color="#EF6C00"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_438_24" x1="8.56913" y1="50.5408" x2="39.0185" y2="44.0065" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0102" stop-color="#BDBDBD"/>
                                <stop offset="0.9869" stop-color="#F5F5F5"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_438_24" x1="32.2352" y1="1.48338" x2="28.8769" y2="37.533" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0079465" stop-color="#4480F7"/>
                                <stop offset="1" stop-color="#315DB3"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_438_24" x1="12.2458" y1="37.5463" x2="43.3164" y2="40.7084" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0102" stop-color="#BDBDBD"/>
                                <stop offset="0.9869" stop-color="#F5F5F5"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_438_24" x1="37.2829" y1="11.9037" x2="40.2726" y2="47.1985" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0079465" stop-color="#66BB6A"/>
                                <stop offset="1" stop-color="#2E7D32"/>
                                </linearGradient>
                                <linearGradient id="paint5_linear_438_24" x1="25.2529" y1="49.8535" x2="54.5612" y2="47.1407" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0102" stop-color="#BDBDBD"/>
                                <stop offset="0.9869" stop-color="#F5F5F5"/>
                                </linearGradient>
                                </defs>
                                </svg>}
            </svg>
          </div>
          <h1>EduLibre</h1>
        </div>
        
        <div className="form-content">
          <h2 className="subtitle">Regístrese para comenzar a aprender</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              placeholder="Ingrese su cédula"
              required
            />
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico"
              required
            />
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              placeholder="Ingrese su edad"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
              required
            />
            <select 
              name="rol"
              value={formData.rol}
              onChange={handleChange}
            >
              <option value="Estudiante">Estudiante</option>
              <option value="Administrador">Administrador</option>
            </select>
            
            <div className="action-container">
              <button type="submit">Regístrese aquí</button>
              <a href="#" onClick={() => navigate('/login')} className="login-link">
                ¿Ya tiene cuenta? Iniciar Sesión
              </a>
            </div>
          </form>
        </div>
        
        <div className="footer">
          <p>© 2024 EduLibre Todos los derechos reservados.</p>
        </div>
      </div>
      
      <div className="image-section">
        <div className="image-grid">
          {}
          {[...Array(6)].map((_, i) => (
            <img key={i} src={`/api/placeholder/100/100`} alt={`Placeholder image ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}