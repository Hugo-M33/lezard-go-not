import {GetServerSideProps, NextPage} from "next"
import {FormEventHandler, useState} from "react";
import useSWR, {useSWRConfig} from 'swr'
import {ArgonautData} from "types/globals";
import ArgonautsList from "components/ArgonautsList"
import ArgonautCreator from "../components/ArgonautCreator";
import Head from "next/head";



interface Props {
    argonauts: ArgonautData[]
}

const Home: NextPage<Props> = ({ argonauts }) => {

  return (
    <main>
        <Head>
            <title>Lézard Go Not - Hugo Martin</title>
        </Head>
      <ArgonautsList />
      <ArgonautCreator/>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const argonauts = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/argonauts`).then(r => r.json())
  return {
    props: {
      argonauts
    }
  }
}

export default Home
