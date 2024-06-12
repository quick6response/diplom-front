import { siteConfig } from '@/config/site';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link
} from '@nextui-org/react';
import { FC } from 'react';

export const HomeStatsEducationEmployeeComponent: FC<{
  education: { count: number };
  employee: { count: number };
}> = ({ education, employee }) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt={siteConfig.logoCompany.max.alt}
          height={40}
          radius="sm"
          src={siteConfig.logoCompany.max.url}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Помощник</p>
          <p className="text-small text-default-500">
            {siteConfig.nameCompany}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          У нас уже {education.count} обучающихся из {education.count}{' '}
          сотрудников зарегистрированных на предприятии.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="/employees">
          Просмотреть сотрудников
        </Link>
      </CardFooter>
    </Card>
  );
};
