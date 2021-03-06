import React from 'react';
import SharebarIcon from './sharebar-icon';

const iconProps = {
  facebook: {
    title: 'Share on Facebook',
    url: 'http://www.facebook.com/sharer/sharer.php?u=',
  },
  twitter: {
    title: 'Share on Twitter',
    url: 'https://twitter.com/intent/tweet?url=',
  },
  googleplus: {
    title: 'Share on Google Plus',
    url: 'https://plus.google.com/share?url=',
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/cws/share?url=',
  },
  mail: {
    title: 'Mail',
    url: 'mailto:',
  },
  print: {
    title: 'Print',
    /* eslint-disable no-script-url */
    url: 'javascript:if(window.print)window.print()',
    /* eslint-enable no-script-url */
    executeDefault: true,
  },
  whatsapp: {
    title: 'WhatsApp',
    url: 'whatsapp://send?text=',
  },
};
export default function Sharebar({
  iconSize = '49px',
  icons = [
    'facebook', 'twitter', 'googleplus', 'linkedin', 'whatsapp',
  ],
  urlOverrides,
} = {}) {
  return (
    <div className="share-component">
      <div className="share-component__icons">
        {icons.map((icon) =>
          <SharebarIcon
            key={icon}
            icon={icon}
            executeDefault={iconProps[icon].executeDefault}
            title={iconProps[icon].title}
            url={urlOverrides[icon] || iconProps[icon].url}
            iconSize={iconSize}
          />
        )}
      </div>
    </div>
  );
}

Sharebar.defaultProps = {
  urlOverrides: {},
};

if (process.env.NODE_ENV !== 'production') {
  Sharebar.propTypes = {
    iconSize: React.PropTypes.string,
    icons: React.PropTypes.arrayOf(React.PropTypes.string),
    urlOverrides: React.PropTypes.shape({
      facebook: React.PropTypes.string,
      twitter: React.PropTypes.string,
      googleplus: React.PropTypes.string,
      linkedin: React.PropTypes.string,
      mail: React.PropTypes.string,
      print: React.PropTypes.string,
      whatsapp: React.PropTypes.string,
    }),
  };
}
