'use client'

import { lazy, Suspense, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { 
   UserCog2Icon,
   MonitorCog,
   CircleUser,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const AccountSettings = lazy(() => import('./tab-contents/account-settings'))
const ProfileSettings = lazy(() => import('./tab-contents/profile-settings'))
const PreferenceSettings = lazy(() => import('./tab-contents/preference-settings'))

import { useQueryState } from 'nuqs'


const tabsData = [
   {
      value: 'profile',
      icon: UserCog2Icon,
      label: 'Profile',
      content: ProfileSettings
   },
   {
      value: 'account',
      icon: CircleUser,
      label: 'Account',
      content: AccountSettings
   },
   {
      value: 'preferences',
      icon: MonitorCog,
      label: 'Preferences',
      content: PreferenceSettings
   },
]

export function SettingsContent() {
   const [tab, setTab] = useQueryState('tab')

   const getActiveTab = useCallback(() => {
      return tabsData.find(item => item.value === tab)?.value || tabsData[0].value
   }, [tab])

  return (
   <Tabs 
      defaultValue={getActiveTab()}
      className="w-full">
      <TabsList className="p-1 space-x-2">
         {tabsData.map((tab, index) => (
            <TabsTrigger 
               key={index}
               onClick={() => setTab(tab.value)}
               value={tab.value}>
               <tab.icon size={16} className="mr-2" />
               {tab.label}
            </TabsTrigger>
         )
         )}
      </TabsList>
      {tabsData.map((tab, index) => (
         <TabsContent 
            value={tab.value} key={index}>
         <Card>
            <CardHeader>
               <h1 className="~text-2xl/3xl font-semibold">{tab.label}</h1>
            </CardHeader>
            <CardContent>
               <Suspense fallback={<div className="flex flex-col gap-3">
                     {Array(5).fill(0).map((_, index) => (
                        <Skeleton key={index} className="w-full h-10" />
                     ))}
                  </div>}>
                  <tab.content/>
               </Suspense>
            </CardContent>
         </Card>
      </TabsContent>
      ))}
   </Tabs>
 
  );
}
