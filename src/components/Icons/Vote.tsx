import React from 'react'

interface Props {
  size: number
  fillColor: string
}
const Vote: React.FC<Props> = props => {
  const { size, fillColor } = props
  return (
    <svg width={size} height={size} viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.1653 0C24.9724 0.376065 25.2041 1.02164 25.2028 1.89161C25.1829 11.4136 25.1787 17.8845 25.1904 27.4064V28.0144H24.1441C22.9634 28.0144 21.7777 27.9994 20.6019 28.0232C20.2731 28.0232 20.1124 27.9254 20.0614 27.612C19.9069 26.6443 19.6591 25.6815 19.6155 24.7088C19.542 23.0228 19.5993 21.3317 19.5931 19.6432C19.5819 16.6785 17.4919 14.3168 14.5674 13.9596C11.8385 13.6261 9.22298 15.5115 8.55165 18.3194C8.4558 18.7456 8.40816 19.1812 8.40966 19.6181C8.39471 21.714 8.42211 23.8087 8.39098 25.9034C8.38101 26.5966 8.23778 27.2823 8.15433 27.9868C7.92391 27.9994 7.7869 28.0131 7.6499 28.0131C5.62969 28.0131 3.60989 28.0131 1.59051 28.0131C0.562968 28.0131 0.00996496 27.4541 0.00871946 26.4174C0.00871946 17.1311 0.00581236 10.895 0 1.60705C0 0.809795 0.373653 0.330937 1.03626 0H24.1653ZM11.2631 7.79838C10.1422 6.66266 9.13454 5.64227 8.12444 4.62815C7.45062 3.95249 6.60741 3.9036 6.01704 4.49277C5.42667 5.08194 5.474 5.94062 6.14159 6.61127C7.45685 7.94003 8.77501 9.26629 10.0961 10.59C10.806 11.3021 11.5907 11.3071 12.3019 10.5963C14.3918 8.50037 16.4785 6.40067 18.5618 4.29721C19.2331 3.62029 19.2755 2.76663 18.6863 2.1762C18.0972 1.58578 17.2577 1.63342 16.5789 2.31409C14.9183 3.98048 13.2609 5.64979 11.6069 7.32203C11.4802 7.4716 11.3653 7.63087 11.2631 7.79838Z"
        fill={fillColor}
      />
      <path
        d="M21.7629 30.8299H22.6522C23.9264 30.8299 25.2005 30.8299 26.4747 30.8299C27.4076 30.8299 27.9855 30.2457 27.9867 29.3043C27.9917 26.2866 27.9917 23.2689 27.9867 20.2512V19.6607C28.328 19.9628 28.5933 20.1948 28.8586 20.4304C29.855 21.3292 30.8514 22.2255 31.8378 23.1293C34.0237 25.135 34.781 27.5719 34.0673 30.4664C32.9746 34.8889 31.8823 39.3118 30.7904 43.7352C30.5711 44.624 30.1028 45 29.2023 45C24.1829 45 19.164 45 14.1454 45C13.6472 45 13.1951 44.8747 12.9136 44.4635C11.5336 42.419 10.2258 40.3343 9.50465 37.945C8.78973 35.5708 8.91926 33.238 9.9468 30.9954C10.8436 29.0323 11.2907 27.0266 11.2135 24.8655C11.15 23.1481 11.1973 21.427 11.2023 19.7071C11.2023 18.0173 12.3955 16.7588 13.9835 16.7525C15.5939 16.7525 16.7909 18.0061 16.7958 19.7272C16.7958 21.3067 16.7958 22.8861 16.7958 24.4656C16.7715 27.0781 17.5454 29.635 19.0128 31.7901C19.2819 32.1912 19.5385 32.6024 19.8162 32.9985C20.2858 33.6629 21.1003 33.8346 21.753 33.4197C22.4056 33.0048 22.5775 32.1561 22.1478 31.4416C22.032 31.2573 21.9174 31.0781 21.7629 30.8299Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default Vote