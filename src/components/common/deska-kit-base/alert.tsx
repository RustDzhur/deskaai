import {cn} from '../twable-classnames';
import {cva, type VariantProps} from 'class-variance-authority';

const alertVariants = cva(
  'p-4 mb-4 text-sm rounded-lg',
  // 'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        info: 'bg-gray-800 text-blue-400',
        danger: 'bg-gray-800 text-red-400',
        success: 'bg-gray-800 text-green-400',
        warning: 'bg-gray-800 text-yellow-400',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

// export const Alert = () => {
//   return (<>
//     <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
//       <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
//     </div>
//     <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//       <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
//     </div>
//     <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
//       <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
//     </div>
//     <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
//       <span className="font-medium">Warning alert!</span> Change a few things up and try submitting again.
//     </div>
//     <div className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
//       <span className="font-medium">Dark alert!</span> Change a few things up and try submitting again.
//     </div>
//   </>)
// }

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  message: React.ReactNode;
}

function Alert({className, variant, ...props}: AlertProps) {
  return (
    <div className={cn(alertVariants({variant}), className)} {...props}>
      {props.message}
    </div>
  );
}

export {Alert};
