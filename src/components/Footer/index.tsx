import {useIntl} from "umi";
import React from "react";

const Footer: React.FC = () => {
  const intl = useIntl();

  return (
    <div style={{margin: '48px 0 24px 0', padding: '0 16px', textAlign: 'center'}}>
      {
        intl.formatMessage({
          id: 'components.footer.copyright',
        })
      }
    </div>
  )
}

export default Footer;
