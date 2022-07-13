import React, { DetailedHTMLProps } from 'react';
import '../../theme/typography.css';

type Props = {
    id: number;
    name: string;
    // All other props
    [x: string]: unknown;
};

interface ITypography {
    variant: keyof typeof variantsMapping;
    color: string;
    children: React.ReactNode;
    props?: DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
    condensed?: boolean;
    bold?: boolean;
}

const variantsMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subheading1: 'h6',
    subheading2: 'h6',
    body1: 'p',
    body2: 'p'
};

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component
const Typography = ({
    variant,
    color,
    children,
    condensed = false,
    bold = false,
    ...props
}: ITypography) => {
    // If the variant exists in variantsMapping, we use it.
    // Otherwise, use p tag instead.
    const Component = (variant ? variantsMapping[variant] : 'p') as React.ElementType<{
        children: React.ReactNode;
    }>;

    return (
        <Component
            className={`${variant ? `typography--variant-${variant}` : ``} ${
                color ? `typography--color-${color}` : ``
            } ${condensed ? `condensed` : ''} ${bold ? `bold` : ''}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;
