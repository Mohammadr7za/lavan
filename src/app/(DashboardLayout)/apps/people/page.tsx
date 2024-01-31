"use client"

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ChildCard from '@/app/(DashboardLayout)/components/shared/ChildCard';
import PeopleListing from "@/app/(DashboardLayout)/components/apps/people/PeopleListing";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'People',
  },
];

const TicketList = () => {
  return (
    <PageContainer title="لیست کاربران" description="this is Ticket App">
      <Breadcrumb title="لیست کاربران" items={BCrumb} />
      <ChildCard>
          <div>
              salam
          </div>
        {/*<PeopleListing />*/}
      </ChildCard>
    </PageContainer>
  );
};

export default TicketList;
