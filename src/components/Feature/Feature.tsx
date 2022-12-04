import { createStyles, SimpleGrid } from '@mantine/core'
import { ReactIcon } from '../ReactIcon/ReactIcon'

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },
}))

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: any
  title: string
  description: string
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className="absolute h-[110px] w-[170px] rounded top-0 left-0 z-[1px] bg-[rgb(255,249,219)] dark:bg-[rgba(248,205,95,0.6)]" />
      <div className="relative z-[2px]">
        <div className="border border-black border-2 rounded w-11 h-11 flex items-center justify-center">
          <ReactIcon icon={Icon} className={'w-8 h-8 text-black'} />
        </div>
        <h1 className={'font-bold text-lg my-3'}>{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  )
}

const mockdata = [
  {
    icon: 'GrBarChart',
    title: 'Free Worldwide Task',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: 'GrWordpress',
    title: 'Best Quality Website',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: 'RiMoneyPoundCircleFill',
    title: 'Very Affordable Pricing',
    description:
      'Thought to have gone extinct, Relicanth was given a name that of the name of the person who discovered.',
  },
]

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />)

  return (
    <div className="container_main">
      <SimpleGrid
        cols={3}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        spacing={50}
      >
        {items}
      </SimpleGrid>
    </div>
  )
}
