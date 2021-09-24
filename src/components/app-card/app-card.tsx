import {
  Component, h, Prop, getAssetPath,
} from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class AppCard {
  @Prop() imgUrl: string;

  @Prop() cardTitle: string;

  @Prop() cardText: string;

  render() {
    return (
      <div>
        <span>
          <img src={getAssetPath(this.imgUrl)} alt="icon" />
          <p>{this.cardTitle}</p>
          <p>{this.cardText}</p>
        </span>
      </div>
    );
  }
}
