export const fonts = {
  primary: `'Source Sans Pro', sans-serif`,
  secondary: `"Lato", , sans-serif`,
};

export const typography = {
  regular: {
    xs: `
      font-size: 0.875rem;
      line-height: 1.05rem;
      `,
    sm: `
      font-size: 1rem;
      line-height: 1.257rem;
      `,
    md: `
      font-size: 1.125rem;
      line-height: 1.414rem;
      `,
    lg: `
      font-size: 1.375rem;
      line-height: 1.728rem;
      `,
    xl: `
      font-size: 1.75rem;
      line-height: 2.2rem;
      `,
  },
  semibold: {
      xs: `
        font-size: 0.875rem;
        line-height: 1.05rem;
        `,
      sm: `
        font-size: 1rem;
        line-height: 1.257rem;
        `,
      md: `
        font-size: 1.125rem;
        line-height: 1.414rem;
        `,
      lg: `
        font-size: 1.375rem;
        line-height: 1.728rem;
        `,
      xl: `
        font-size: 1.75rem;
        line-height: 2.2rem;
        `,
  },
};

for (const size in typography.regular) {
  typography.regular[size] += `
  font-family: ${fonts.primary};
  font-weight: 400;
  `;
}

for (const size in typography.semibold) {
  typography.semibold[size] += `
  font-family: ${fonts.secondary};
  font-weight: 600;
  `;
}
