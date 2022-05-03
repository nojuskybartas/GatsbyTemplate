import { css } from "styled-components/macro";

import { Theme } from "styles/theme";
import { TextType } from "./Typography";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${{
          _: theme.typography.h1.fontSize,
          lmobile: theme.typography.h1.fontSizeMobile,
        }};
        line-height: ${{
          _: theme.typography.h1.lineHeight,
          lmobile: theme.typography.h1.lineHeightMobile,
        }};
      `;
  }
};
