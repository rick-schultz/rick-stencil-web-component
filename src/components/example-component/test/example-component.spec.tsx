import { createSpecComponent, getChild } from '../../../../testing';
import { ExampleComponent } from '../example-component';

describe('example-component', () => {
  it('renders', async () => {
    const content = getChild(await createSpecComponent('example-component', ExampleComponent));

    expect(content).toEqualHtml(`
    <div id="divHost">
      <header>
        <h1>Web Component by Rick Schultz</h1>
      </header>
      <main>
        <section class="card-deck">
          <app-card
            cardTitle="About Stencil"
            cardText="Stencil is a toolchain for building reusable, scalable Design Systems. Generate small, blazing fast, and 100% standards based Web Components that run in every browser."
            imgUrl="/src/assets/icon/logoStencil.png"
          ></app-card>
          <app-card
            cardTitle="Über uns"
            cardText="Wir bei Virtual Identity erforschen mit Leidenschaft Alltagsprobleme und versuchen sie digital zu loesen, sodass sie nicht nur Spass machen, sondern vor allem auch nuetzlich sind. Fuer Mensch und Marke."
            imgUrl="/src/assets/icon/logoVI.png"
          ></app-card>
          <app-card
            cardTitle="About React"
            cardText="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and can be used as a base in the development of single-page or mobile applications. "
            imgUrl="/src/assets/icon/logoReact.png"
          ></app-card>
        </section>
      </main>
      <footer>
        <p>&copy; by Rick Schultz</p>
      </footer>
  </div>
    `);
  });
});
