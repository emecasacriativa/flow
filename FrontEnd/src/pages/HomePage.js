import React, { useState, useEffect } from 'react';
import Handlebars from 'handlebars';

const template = Handlebars.compile(`
  <div class="container">
    <header>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </header>

    <section class="services">
      <h2>Produtos</h2>
      <ul>
        {{#each services}}
          <li>{{ this.name }}</li>
        {{/each}}
      </ul>
    </section>

    <section class="contact">
      <h2>Contato</h2>
      <p>{{ email }}</p>
      <p>{{ phone }}</p>
    </section>
  </div>
`);

const data = {
  title: 'Commodities',
  subtitle: 'Em alta na B3',
  services: [
    { name: 'Ouro' },
    { name: 'Açúcar' },
    { name: 'Soja' }
  ],
  email: 'contato@example.com',
  phone: '(55) 1234-5678'
};

const HomePage = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const html = template(data);
    setHtmlContent(html);
  }, []); // Run effect only once after component mounts

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HomePage;
