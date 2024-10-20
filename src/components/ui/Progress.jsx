import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  const classNames = [
    'relative h-4 w-full overflow-hidden rounded-full bg-gray-200',
    className
  ].filter(Boolean).join(' ');

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={classNames}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-blue-600 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = 'Progress';

export { Progress };