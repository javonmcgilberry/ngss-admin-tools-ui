import { DetailedHTMLProps, SVGProps } from 'react';
import Typography from '../typography/Typography';
import styles from './Common.module.scss';

interface IContainerComponent {
    children: React.ReactNode | React.ReactNode[];
}

export const Row = ({ children }: IContainerComponent) => {
    return <div className={styles.row}>{children}</div>;
};

export const Column = ({ children }: IContainerComponent) => {
    return <div className={styles.column}>{children}</div>;
};

export const Title = ({ title }: { title: string }) => {
    return <h1>{title}</h1>;
};

export const SectionHeader = ({ title }: { title: string }) => {
    return <h1>{title}</h1>;
};

export const PageWrapper = ({ children }: IContainerComponent) => {
    return <div className={styles.page_container}>{children}</div>;
};

const Hr = () => {
    return (
        <div className={styles.hr_wrapper}>
            <div className={styles.hr_styling}></div>
        </div>
    );
};

export const Section = ({ title, children }: { children: React.ReactNode; title: string }) => {
    return (
        <div className={styles.page_section}>
            <div className={styles.page_title_wrapper}>
                <Typography variant={'h4'} color={''} condensed>
                    {title.toUpperCase()}
                </Typography>
                <Hr />
            </div>
            <div className={styles.page_section_content}>{children}</div>
        </div>
    );
};

export const DominosLogo = ({
    onClick
}: {
    onClick: React.MouseEventHandler<SVGSVGElement> | undefined;
}) => {
    return (
        <svg
            onClick={onClick}
            width="3rem"
            height="3rem"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="dominos-logo"
        >
            <path
                d="M47.1476 13.8925L34.1082 0.853333C33.5617 0.306947 32.8206 0 32.0478 0C31.275 0 30.5339 0.306947 29.9874 0.853333L19.0525 11.7883L0.852076 29.9889C0.306431 30.5358 0 31.2769 0 32.0494C0 32.822 0.306431 33.563 0.852076 34.1099L13.8912 47.1493C14.4377 47.6957 15.1788 48.0027 15.9516 48.0027C16.7244 48.0027 17.4655 47.6957 18.012 47.1493L34.3262 30.8354L47.1481 18.0135C47.6937 17.4665 48.0001 16.7255 48 15.9529C47.9999 15.1803 47.6934 14.4393 47.1476 13.8925Z"
                fill="white"
            />
            <path
                d="M46.2256 14.8197L33.1862 1.78054C33.0368 1.63107 32.8593 1.5125 32.664 1.43161C32.4688 1.35072 32.2594 1.30908 32.0481 1.30908C31.8367 1.30908 31.6274 1.35072 31.4321 1.43161C31.2368 1.5125 31.0593 1.63107 30.9099 1.78054L16.8115 15.8789L32.1265 31.1939L46.2249 17.0958C46.5267 16.794 46.6963 16.3847 46.6965 15.9579C46.6966 15.5311 46.5272 15.1216 46.2256 14.8197ZM34.7572 18.5895C34.1394 19.2065 33.3268 19.5902 32.4579 19.6752C31.589 19.7603 30.7175 19.5415 29.9918 19.0561C29.2661 18.5706 28.7312 17.8486 28.4781 17.013C28.225 16.1775 28.2695 15.28 28.6039 14.4735C28.9383 13.667 29.5419 13.0014 30.312 12.59C31.0821 12.1787 31.971 12.0471 32.8273 12.2176C33.6835 12.3881 34.4542 12.8502 35.008 13.5251C35.5618 14.2001 35.8644 15.0462 35.8643 15.9193C35.8646 16.4152 35.767 16.9064 35.5772 17.3646C35.3873 17.8228 35.109 18.239 34.7581 18.5895H34.7572Z"
                fill="#E31837"
            />
            <path
                d="M1.77419 30.9108C1.62472 31.0603 1.50615 31.2377 1.42526 31.433C1.34437 31.6283 1.30273 31.8376 1.30273 32.049C1.30273 32.2604 1.34437 32.4697 1.42526 32.665C1.50615 32.8603 1.62472 33.0377 1.77419 33.1872L14.8133 46.2265C15.1152 46.5283 15.5246 46.6979 15.9515 46.6979C16.3784 46.6979 16.7878 46.5283 17.0897 46.2265L31.1811 32.1343L15.8661 16.8193L1.77419 30.9108ZM13.066 34.6662C12.4477 35.287 11.6333 35.6742 10.7615 35.7617C9.88968 35.8491 9.01453 35.6315 8.28528 35.1458C7.55603 34.6601 7.01782 33.9365 6.76243 33.0984C6.50705 32.2603 6.55031 31.3595 6.88483 30.5497C7.21935 29.7399 7.82441 29.0712 8.59685 28.6577C9.36928 28.2441 10.2613 28.1113 11.1207 28.2819C11.9801 28.4525 12.7537 28.916 13.3096 29.5932C13.8655 30.2704 14.1693 31.1195 14.1691 31.9957C14.1691 32.9967 13.7724 33.957 13.066 34.6662ZM18.8085 29.4776C19.4259 28.8611 20.238 28.4776 21.1064 28.3926C21.9748 28.3075 22.8458 28.5261 23.5711 29.0112C24.2964 29.4963 24.8311 30.2178 25.0842 31.0528C25.3372 31.8879 25.293 32.7848 24.9589 33.5909C24.6249 34.397 24.0218 35.0624 23.2522 35.4737C22.4827 35.885 21.5944 36.0168 20.7386 35.8467C19.8828 35.6766 19.1124 35.215 18.5587 34.5407C18.005 33.8664 17.7022 33.0209 17.7018 32.1484C17.7009 31.6522 17.7983 31.1607 17.9882 30.7024C18.1782 30.244 18.4569 29.8277 18.8085 29.4776Z"
                fill="#006491"
            />
        </svg>
    );
};
