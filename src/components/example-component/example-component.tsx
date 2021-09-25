import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-component',
  styleUrl: 'example-component.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class ExampleComponent {
  // eslint-disable-next-line class-methods-use-this
  public render(): JSX.Element {
    return (
      <div id="divHost">
        <header>
          <h1>Web Component by Rick Schultz</h1>
        </header>
        <main>
          <section class="card-deck">
            <div class="app-card">
              <span>
                <img src="https://tinyurl.com/7a7me292" alt="icon" />
                <p>About Stencil</p>
                <p>Stencil is a toolchain for building reusable, scalable Design Systems.
            Generate small, blazing fast, and 100% standards based Web Components
            that run in every browser.</p>
              </span>
            </div>
            <div class="app-card">
              <span>
                <img src="https://tinyurl.com/nh8hdy6t" alt="icon" />
                <p>Über uns</p>
                <p>Wir bei Virtual Identity erforschen mit Leidenschaft Alltagsprobleme
                  und versuchen sie digital zu loesen, sodass sie nicht nur Spass machen,
                  sondern vor allem auch nuetzlich sind. Fuer Mensch und Marke.</p>
              </span>
            </div>
            <div class="app-card">
              <span>
                <img src="https://tinyurl.com/2ut8tw3a" alt="icon" />
                <p>About React</p>
                <p>React is a free and open-source front-end JavaScript library for
                  building user interfaces or UI components. It is maintained by
                  Facebook and can be used as a base in the development of
                  single-page or mobile applications.</p>
              </span>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; by Rick Schultz</p>
        </footer>
      </div>
    );
  }
}
