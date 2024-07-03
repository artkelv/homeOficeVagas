import Header from "@/components/header/Header";

import styles from "@/styles/blog.module.scss";

import { robotoFlex } from "@/fonts/font";

import Head from "next/head";
import Image from "next/image";

import webtechImg from "@/public/webtech/logo_empresa.jpg";
import blogImg from "@/public/blog/blogImg.png";

export default function Blog() {
  
  return (
    <div id={styles.pageBlog} className={robotoFlex.className}>
      <Head>
        <title>Blog - Home Office Vagas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Acompanhe as últimas novidades e dicas de carreira no Blog do Home Office Vagas. Em breve, teremos conteúdo exclusivo para ajudar você a encontrar o emprego dos seus sonhos!" />
        <meta property="og:site_name" content="Home Office Vagas" />
        <meta property="og:title" content="Blog - Home Office Vagas" />
        <meta property="og:description" content="Acompanhe as últimas novidades e dicas de carreira no Blog do Home Office Vagas. Em breve, teremos conteúdo exclusivo para ajudar você a encontrar o emprego dos seus sonhos!" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://homeofficevagas.com.br/blog" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="blog, Home Office Vagas, novidades, dicas de carreira, emprego" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="author" content="Equipe Home Office Vagas" />
      </Head>

      <Header/> 
      <div id={styles.boxContainer}>
        <Image id={styles.imgBlog} src={blogImg}/>
      </div>
      
      {/* <div id={styles.bannerOne} className={styles.bannerOneBlog}>
        <div id={styles.bgBannerOne}>
          <div id={styles.contentBannerOne}>
            <div id={styles.boxTitleOne}>
              <h1 id={styles.titleBannerOne}>Blog</h1>
            </div>
            <div id={styles.boxDescriptionOne}>
              <p id={styles.descriptionBannerOne}>Fique por dentro dos mais variados artigos, temas e insights que rolam no mundo das vagas internacionais. Aqui voce tem a oportunidade de ler artigos escritos por pessoas influentes e que entendem do assunto.</p>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.formBlog}>
        <input type="text" placeholder="Pesquise por algum tema"/>
        <button>Pesquisar</button>
      </div>

      <main id={styles.mainContentBlog}>
        <div>
          <div>
            <div id={styles.bannerTwo} className={styles.bannerTwoInternacional}>
              <div id={styles.bgBannerTwo}>
                <div id={styles.contentBannerTwo}>
                  <h3 id={styles.titleBannerTwo}>Anuncie sua empresa com a gente!</h3>
                  <div id={styles.boxDescriptionTwo}>
                    <p className={styles.descriptionTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                    <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por milhares de pessoas POR DIAA!</p>
                    <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                  </div>
                  <a id={styles.btnWantBanner} href="mailto:https://api.whatsapp.com/send?phone=5561982434868&text=Olá, vim do site Home Office Vagas e tenho interesse em anunciar nos Banners do site de voces!">Quero este Banner</a>
                </div>
              </div>
            </div>
          </div>
          <div id={styles.sectionArticles}>
            <div>
              <h3>Riachuelo lança processo seletivo com + de 200 vagas até o dia 28/06.</h3>
              <p>Por Maria Aquino, sexta-feira, 9 de agosto de 2023</p>
              <div>
                <span>Riachuelo</span>
                <span>Emprego</span>
                <span>Processo Seletivo</span>
              </div>
            </div>
          </div>  
        </div>
        <div>
          <span>Empregos</span>
          <span>Palestras</span>
          <span>Carreiras</span>
          <span>Recursos</span>
          <span>Atualizações</span>
        </div>
      </main>

      <div id={styles.sectionWebtech}>
        <div>
          <p>Deseja um site para a sua empresa? A <strong>web-tech</strong> pode te ajudar!</p>
          <a href="https:webtechservicos.com.br">Obter</a>
        </div>
        <Image src={webtechImg} height={100} width={200}/>
      </div> */}
    </div>
  )
}