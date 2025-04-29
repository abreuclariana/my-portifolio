// page_view.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Função para obter ou criar o client ID (adapte conforme sua implementação)
const getOrCreateClientId = () => {
  let clientId = localStorage.getItem('ga_client_id');
  if (!clientId) {
    clientId = self.crypto.randomUUID();
    localStorage.setItem('ga_client_id', clientId);
  }
  return clientId;
};

// Função para enviar o evento para o seu backend (adapte a URL)
const enviarEventoParaBackend = async (event_name, params) => {
  const clientId = getOrCreateClientId();
  const backendUrl = 'https://clarianaabreu.vercel.app/enviar-evento-ga4'; // Substitua pela URL real do seu backend

  try {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, event_name, params }),
    });

    if (response.ok) {
      console.log(`Evento '${event_name}' enviado para o backend com sucesso.`);
    } else {
      const errorText = await response.text();
      console.error(`Erro ao enviar '${event_name}' para o backend: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error('Erro ao comunicar com o backend:', error);
  }
};

// Componente para rastrear visualizações de página
const PageViewTracker = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      enviarEventoParaBackend('page_view', {
        page_location: url,
        page_title: document.title,
        page_referrer: document.referrer,
      });
    };

    // Enviar page_view no carregamento inicial
    enviarEventoParaBackend('page_view', {
      page_location: window.location.href,
      page_title: document.title,
      page_referrer: document.referrer,
    });

    // Enviar page_view em mudanças de rota (para SPAs)
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  // Este componente não renderiza nada visualmente
  return null;
};

export default PageViewTracker;