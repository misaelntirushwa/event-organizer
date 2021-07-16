import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

/**
 * Shape options for the avatar.
 */
export type AvatarShape = 'square' | 'circle';

/**
 * Size options for the avatar.
 */
export type AvatarSize = 'regular' | 'large' | 'xlarge';

/**
 * Avatar represents people using icons, labels and images.
 */

@Component({
  selector: 'ui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  /**
   * Defines the text to display.
   */
  @Input() label: string | null = null;

  /**
   * Defines the icon to display.
   */
  @Input() icon: string | null = null;

  /**
   * Defines the image to display.
   */
  @Input() image: string | null = null;

  /**
   * Size of the element, valid options are "regular", "large" and "xlarge".
   */
  @Input() size: AvatarSize = 'regular';

  /**
   * Shape of the element, valid options are "square" and "circle".
   */
  @Input() shape: AvatarShape = 'circle';

  /**
   * Inline style of the element.
   */
  @Input() style: Record<string, unknown> = {};

  /**
   * Evaluate which css classes to apply to the element.
   * @returns css classes
   */
  containerClass() {
    return {
      avatar: true,
      'avatar-image': this.image != null,
      'avatar-circle': this.shape === 'circle',
      'avatar-square': this.shape === 'square',
      'avatar-lg': this.size === 'large',
      'avatar-xl': this.size === 'xlarge',
    };
  }
}
