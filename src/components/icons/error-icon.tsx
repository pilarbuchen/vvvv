export const ErrorIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path
                d="M11.5 3c4.687 0 8.5 3.813 8.5 8.5 0 4.687-3.813 8.5-8.5 8.5C6.813 20 3 16.187 3 11.5 3 6.813 6.813 3 11.5 3Zm0 1C7.364 4 4 7.364 4 11.5S7.364 19 11.5 19s7.5-3.364 7.5-7.5S15.636 4 11.5 4Zm.5 10v1h-1v-1h1Zm0-6v5h-1V8h1Z"
                fillRule="evenodd"
            />
        </svg>
    );
};
