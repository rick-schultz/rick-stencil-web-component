import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  @Prop() imageOne = 'logoVI.png';

  @Prop() imageTwo = 'logoStencil.png';

  @Prop() imageThree = 'logoReact.png';

  render() {
    return (
      <div id="divHost">
        <header>
          <h1>Web Component by Rick Schultz</h1>
        </header>
        <main>
          <section class="card-deck">
            <app-card
              cardTitle="About Stencil"
              cardText="Stencil is a toolchain for building reusable, scalable Design Systems. Generate small, blazing fast, and 100% standards based Web Components that run in every browser."
              imgUrl={`/src/assets/icon/${this.imageTwo}`}
            ></app-card>
            <app-card
              cardTitle="Über uns"
              cardText="Wir bei Virtual Identity erforschen mit Leidenschaft Alltagsprobleme und versuchen sie digital zu loesen, sodass sie nicht nur Spass machen, sondern vor allem auch nuetzlich sind. Fuer Mensch und Marke."
              imgUrl={`/src/assets/icon/${this.imageOne}`}
            ></app-card>
            <app-card
              cardTitle="About React"
              cardText="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and can be used as a base in the development of single-page or mobile applications. "
              imgUrl={`/src/assets/icon/${this.imageThree}`}
            ></app-card>
          </section>
        </main>
        <footer>
          <p>&copy; by Rick Schultz</p>
        </footer>
      </div>
    );
  }
}
