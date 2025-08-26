import React, { useState, useRef, useEffect } from "react";

// Ícones SVG 
const IconeCasa = () => <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>;
const IconeDownload = () => <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><polyline points="7 11 12 16 17 11" /><line x1="12" y1="4" x2="12" y2="16" /></svg>;
const IconeNovaFoto = () => <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const IconePlaceholderImagem = () => <svg width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#999" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="15" y1="8" x2="15.01" y2="8" /><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" /><path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" /></svg>;
const IconeFechar = () => <svg width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;

// Filtros 
const IconeGhibli = () => <svg width="48" height="48" viewBox="0 0 24 24"><defs><linearGradient id="ghibliGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#76D7C4"/><stop offset="100%" stopColor="#5DADE2"/></linearGradient></defs><path fill="url(#ghibliGradient)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.24 13.76c-1.42.48-2.9.29-4.13-.52-1.23-.81-1.98-2.13-2.05-3.57-.07-1.44.53-2.81 1.68-3.65 1.15-.84 2.63-1.03 4.05-.55l.38 1.32c-.9-.32-1.88-.19-2.68.35-.8.54-1.28 1.45-1.23 2.43.05.98.62 1.87 1.5 2.33.88.46 1.9.46 2.78 0l.38 1.32z"/></svg>;
const IconePixelArt = () => <svg width="48" height="48" viewBox="0 0 24 24"><path fill="#8E44AD" d="M4 4h4v4H4z M10 4h4v4h-4z M16 4h4v4h-4z M4 10h4v4H4z M10 10h4v4h-4z M16 10h4v4h-4z M4 16h4v4H4z M10 16h4v4h-4z M16 16h4v4h-4z"/></svg>;
const IconeBobbieGoods = () => <svg width="48" height="48" viewBox="0 0 24 24"><path fill="#FADBD8" d="M12 8.1c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7m0-2c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7z"/><path fill="#EC7063" d="M17.8 15.3c-1.4-1-3.2-1.6-5.1-1.6h-1.4c-1.9 0-3.8.6-5.1 1.6C4.8 16.1 4 17.4 4 18.8V20h16v-1.2c0-1.4-.8-2.7-2.2-3.5z"/></svg>;
const IconeCyberPunk = () => <svg width="48" height="48" viewBox="0 0 24 24"><defs><linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF00FF"/><stop offset="100%" stopColor="#00FFFF"/></linearGradient></defs><path fill="url(#cyberGradient)" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 13.5H6v-3h2v3zm4 0h-2v-3h2v3zm4 0h-2v-3h2v3z"/></svg>;
const IconePistache = () => <svg width="48" height="48" viewBox="0 0 24 24"><defs><linearGradient id="pistacheGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#A9DFBF"/><stop offset="100%" stopColor="#27AE60"/></linearGradient></defs><path fill="url(#pistacheGradient)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5c-2.49 0-4.5-2.01-4.5-4.5S8.01 7.5 10.5 7.5c1.24 0 2.37.51 3.18 1.32L12 10.5l-1.68-1.68c-.63-.63-1.47-.94-2.32-.94-1.66 0-3 1.34-3 3s1.34 3 3 3c.85 0 1.69-.31 2.32-.94L12 13.5l1.68 1.68c-.81.81-1.94 1.32-3.18 1.32z"/></svg>;
const IconeVintage = () => <svg width="48" height="48" viewBox="0 0 24 24"><defs><linearGradient id="vintageGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#E59866"/><stop offset="100%" stopColor="#BA4A00"/></linearGradient></defs><path fill="url(#vintageGradient)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>;
const IconePretoBranco = () => <svg width="48" height="48" viewBox="0 0 24 24"><path fill="#444" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"/></svg>;

// Estado e Filtros 
const LISTA_FILTROS = [
    { nome: "Ghibli", icone: <IconeGhibli/>, tema: 'Ghibli' },
    { nome: "Pixel Art", icone: <IconePixelArt/>, tema: 'Pixel Art' },
    { nome: "Bobbie Goods", icone: <IconeBobbieGoods/>, tema: 'Bobbie Goods' },
    { nome: "Cyber Punk", icone: <IconeCyberPunk/>, tema: 'Cyber Punk' },
    { nome: "Pistache", icone: <IconePistache/>, tema: 'Pistache' },
    { nome: "Vintage", icone: <IconeVintage/>, tema: 'Vintage' },
    { nome: "Preto e Branco", icone: <IconePretoBranco/>, tema: 'Preto e Branco' },
];

const ENDERECO_API = "https://api-mural.onrender.com/api/editar-imagem";

const useGerenciadorDeFotos = () => {
    const [fotoOriginal, setFotoOriginal] = useState(null);
    const [fotoComFiltro, setFotoComFiltro] = useState(null);
    const [cameraAberta, setCameraAberta] = useState(false);
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [filtroAtivo, setFiltroAtivo] = useState(null);
    const seletorDeArquivoRef = useRef(null);

    const converterUrlParaArquivo = (url, nomeArquivo, tipoMime) => {
        return fetch(url)
            .then(res => res.arrayBuffer())
            .then(buf => new File([buf], nomeArquivo, {type: tipoMime}));
    };

    const aplicarFiltroIA = async (filtro) => {
        if (!fotoOriginal) return;
        try {
            const arquivoImagem = await converterUrlParaArquivo(fotoOriginal, 'upload.png', 'image/png');
            const dadosFormulario = new FormData();
            dadosFormulario.append('imagem', arquivoImagem);
            dadosFormulario.append('tema', filtro.tema);

            const resposta = await fetch(ENDERECO_API, {
                method: 'POST',
                body: dadosFormulario,
            });

            if (!resposta.ok) {
                const dadosErro = await resposta.json().catch(() => ({}));
                throw new Error(`Erro na API: ${resposta.statusText} - ${dadosErro.message || 'Sem detalhes'}`);
            }

            const resultado = await resposta.json();
            
            if (resultado.novaImagemUrl) {
                return resultado.novaImagemUrl;
            } else {
                throw new Error("A resposta da API não contém a 'novaImagemUrl'.");
            }

        } catch (erro) {
            console.error("Erro ao aplicar o filtro de IA:", erro);
        }
    };
    
    const aoMudarArquivo = (evento) => {
        const arquivo = evento.target.files[0];
        if (arquivo) {
            const uriArquivo = URL.createObjectURL(arquivo);
            setFotoOriginal(uriArquivo);
            setFotoComFiltro(null);
            setFiltroAtivo(null);
        }
        evento.target.value = null;
    };
    
    const aoCapturarDaCamera = (urlDadosImagem) => {
        setFotoOriginal(urlDadosImagem);
        setFotoComFiltro(null);
        setFiltroAtivo(null);
        setCameraAberta(false);
    };

    const selecionarFiltro = async (filtro) => {
        if (!fotoOriginal || estaCarregando) return;
        setEstaCarregando(true);
        setFiltroAtivo(filtro.nome);
        const resultado = await aplicarFiltroIA(filtro);
        if(resultado) {
            setFotoComFiltro(resultado);
        }
        setEstaCarregando(false);
    };

    const limparTudo = () => {
        setFotoOriginal(null);
        setFotoComFiltro(null);
        setFiltroAtivo(null);
        if (seletorDeArquivoRef.current) {
            seletorDeArquivoRef.current.value = null; 
        }
    };
    
    const baixarFotoEditada = () => {
        if (!fotoComFiltro) return;
        const link = document.createElement('a');
        link.href = fotoComFiltro;
        link.download = `foto_editada_${filtroAtivo.replace(' ', '_').toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return {
        fotoOriginal, fotoComFiltro, cameraAberta, estaCarregando, filtroAtivo, seletorDeArquivoRef,
        aoMudarArquivo, aoCapturarDaCamera, selecionarFiltro, limparTudo, baixarFotoEditada,
        abrirCamera: () => setCameraAberta(true),
        fecharCamera: () => setCameraAberta(false),
        dispararSeletorArquivo: () => seletorDeArquivoRef.current.click(),
    };
};

// Componentes de UI

const TelaDeCarregamento = () => <div style={estilos.spinner}></div>;

const VisualizadorCamera = ({ aoCapturar, aoFechar }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        let stream;
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(s => {
                stream = s;
                if (videoRef.current) videoRef.current.srcObject = stream;
            })
            .catch(err => {
                console.error("Erro na câmera:", err);
                aoFechar();
            });
        return () => stream?.getTracks().forEach(track => track.stop());
    }, [aoFechar]);

    const tirarFoto = () => {
        if (!videoRef.current) return;
        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        aoCapturar(canvas.toDataURL("image/png"));
    };

    return (
        <div style={estilos.containerCamera}>
            <video ref={videoRef} autoPlay playsInline style={estilos.previewVideo} />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div style={estilos.containerBotoesCamera}>
                <button style={estilos.botaoCancelarCamera} onClick={aoFechar}><IconeFechar /></button>
                <button style={estilos.botaoCapturarCamera} onClick={tirarFoto} />
            </div>
        </div>
    );
};

const TelaInicial = ({ aoClicarUpload, aoClicarCamera }) => (
    <div style={estilos.containerPlaceholder}>
        <IconePlaceholderImagem />
        <p style={estilos.textoPlaceholder}>Envie uma foto para começar a editar</p>
        <div style={estilos.botoesPlaceholder}>
            <button style={estilos.botaoPrincipal} onClick={aoClicarUpload}>Escolher o Arquivo</button>
            <button style={estilos.botaoPrincipal} onClick={aoClicarCamera}>Abrir sua Câmera</button>
        </div>
    </div>
);

const ComparadorDeImagens = ({ imagemAntes, imagemDepois }) => {
    const [posicaoSlider, setPosicaoSlider] = useState(50);
    const [estaArrastando, setEstaArrastando] = useState(false);
    const containerRef = useRef(null);

    const moverSlider = (clientX) => {
        if (!containerRef.current) return;
        const retangulo = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - retangulo.left, retangulo.width));
        const percentual = (x / retangulo.width) * 100;
        setPosicaoSlider(percentual);
    };

    const aoPressionarMouse = (e) => { e.preventDefault(); setEstaArrastando(true); };
    const aoSoltarMouse = () => setEstaArrastando(false);
    const aoMoverMouse = (e) => { if (estaArrastando) moverSlider(e.clientX); };
    
    const aoIniciarToque = (e) => { setEstaArrastando(true); };
    const aoMoverToque = (e) => { if (estaArrastando) moverSlider(e.touches[0].clientX); };

    useEffect(() => {
        const tratarSoltar = () => setEstaArrastando(false);
        window.addEventListener('mouseup', tratarSoltar);
        window.addEventListener('touchend', tratarSoltar);
        
        return () => {
            window.removeEventListener('mouseup', tratarSoltar);
            window.removeEventListener('touchend', tratarSoltar);
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            style={estilos.containerComparador} 
            onMouseMove={aoMoverMouse}
            onTouchMove={aoMoverToque}
            onMouseLeave={aoSoltarMouse}
        >
            <img src={imagemDepois} style={estilos.imagemComparador} alt="Depois" />
            <div style={{...estilos.wrapperImagemComparador, clipPath: `inset(0 ${100 - posicaoSlider}% 0 0)`}}>
                <img src={imagemAntes} style={estilos.imagemComparador} alt="Antes" />
            </div>
            <div style={{...estilos.sliderComparador, left: `${posicaoSlider}%`}}
                 onMouseDown={aoPressionarMouse}
                 onTouchStart={aoIniciarToque}>
                <div style={estilos.handleComparador}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M8 14l-4-4 4-4m8 8l4-4-4-4"/></svg>
                </div>
            </div>
        </div>
    );
};

// Aplicação

export default function EditorDeFotosApp() {
    const {
        fotoOriginal, fotoComFiltro, cameraAberta, estaCarregando, filtroAtivo, seletorDeArquivoRef,
        aoMudarArquivo, aoCapturarDaCamera, selecionarFiltro, limparTudo, baixarFotoEditada,
        abrirCamera, fecharCamera, dispararSeletorArquivo
    } = useGerenciadorDeFotos();

    return (
        <div style={estilos.containerApp}>
            <div style={estilos.molduraApp}>
                {cameraAberta && <VisualizadorCamera aoCapturar={aoCapturarDaCamera} aoFechar={fecharCamera} />}
                
                <header style={estilos.cabecalho}>
                    <h1 style={estilos.titulo}>Editor Lensy</h1>
                    <div style={{display: 'flex', gap: 15}}>
                        <button onClick={limparTudo} style={estilos.botaoIcone} title="Nova Foto"><IconeNovaFoto /></button>
                        <button onClick={baixarFotoEditada} style={{...estilos.botaoIcone, display: fotoComFiltro ? 'flex' : 'none'}} title="Baixar Foto"><IconeDownload /></button>
                    </div>
                </header>

                <main className="conteudoPrincipal" style={estilos.conteudoPrincipal}>
                    <div style={estilos.containerImagem}>
                        {estaCarregando && <div style={estilos.overlayCarregamento}><TelaDeCarregamento /></div>}
                        {!fotoOriginal && <TelaInicial aoClicarUpload={dispararSeletorArquivo} aoClicarCamera={abrirCamera} />}
                        {fotoOriginal && !fotoComFiltro && <img src={fotoOriginal} style={estilos.imagemPrincipal} alt="Preview" />}
                        {fotoOriginal && fotoComFiltro && <ComparadorDeImagens imagemAntes={fotoOriginal} imagemDepois={fotoComFiltro} />}
                    </div>
                    
                    <input type="file" ref={seletorDeArquivoRef} onChange={aoMudarArquivo} style={{ display: "none" }} accept="image/*" />
                    
                    {fotoOriginal && (
                        <div style={estilos.secaoEfeitos}>
                            <h2 style={estilos.tituloEfeitos}>Estilos</h2>
                            <div className="faixaFiltros" style={estilos.faixaFiltros}>
                                {LISTA_FILTROS.map(filtro => (
                                    <button 
                                        key={filtro.nome} 
                                        style={{...estilos.botaoFiltro, ...(filtroAtivo === filtro.nome && estilos.botaoFiltroAtivo)}} 
                                        onClick={() => selecionarFiltro(filtro)}
                                    >
                                        <div style={estilos.miniaturaFiltro}>
                                            {filtro.icone}
                                        </div>
                                        <span style={estilos.nomeFiltro}>{filtro.nome}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

// Estilos 
const estilos = {
    containerApp: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh',
        background: 'linear-gradient(135deg, #e9e4f0, #d3cce3)', padding: '1rem',
        fontFamily: "'Poppins', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'", boxSizing: 'border-box',
    },
    molduraApp: {
        width: '100%', maxWidth: '420px', height: 'clamp(600px, 95vh, 850px)',
        background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(30px)', borderRadius: '40px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1.5px solid rgba(255, 255, 255, 0.8)',
    },
    cabecalho: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 1.8rem', color: '#5a5a7a', flexShrink: 0, borderBottom: '1px solid rgba(200, 190, 220, 0.5)',
    },
    titulo: {
        fontSize: '1.5rem', fontWeight: '600', color: '#4a4a6a', margin: 0,
    },
    conteudoPrincipal: {
        flex: 1, display: 'flex', flexDirection: 'column', padding: '1.5rem', overflowY: 'auto',
    },
    containerImagem: {
        flexGrow: 1, flexShrink: 1, minHeight: '250px', display: 'flex', justifyContent: "center",
        alignItems: "center", width: "100%", marginBottom: '1.5rem', backgroundColor: "rgba(220, 210, 230, 0.5)",
        borderRadius: 30, overflow: "hidden", position: 'relative', border: '1px solid rgba(255, 255, 255, 0.5)',
    },
    imagemPrincipal: { width: "100%", height: "100%", objectFit: 'cover' },
    overlayCarregamento: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10,
    },
    spinner: {
        width: '50px', height: '50px', border: '5px solid rgba(150, 130, 180, 0.2)',
        borderTop: '5px solid #a881c7', borderRadius: '50%', animation: 'spin 1s linear infinite',
    },
    containerPlaceholder: {
        display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center",
        color: '#6a6a8a', padding: '1rem', textAlign: 'center', height: '100%',
    },
    textoPlaceholder: { marginTop: '1rem', fontSize: '1.1rem', fontWeight: '500' },
    botoesPlaceholder: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', width: '100%', justifyContent: 'center', alignItems: 'center' },
    botaoPrincipal: {
        padding: "0.9rem 1.5rem", width: '80%', background: 'linear-gradient(45deg, #c3aed6, #b099c4)',
        color: 'white', border: 'none', borderRadius: 15, cursor: 'pointer',
        fontSize: '1rem', fontWeight: '600', boxShadow: '0 4px 20px rgba(176, 153, 196, 0.5)', transition: 'all 0.3s ease',
    },
    botaoIcone: {
        background: 'rgba(255, 255, 255, 0.3)', border: '1px solid rgba(200, 190, 220, 0.4)',
        color: '#5a5a7a', cursor: 'pointer', padding: '0.6rem', borderRadius: '50%',
        display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.2s ease',
    },
    secaoEfeitos: { width: '100%', flexShrink: 0, marginTop: 'auto' },
    tituloEfeitos: { fontSize: '1.3rem', fontWeight: '600', color: '#4a4a6a', textAlign: 'left', marginBottom: '1rem' },
    faixaFiltros: {
        display: 'flex', gap: '1rem', overflowX: 'auto', padding: '0.5rem', margin: '0 -0.5rem',
    },
    botaoFiltro: {
        background: 'none', border: 'none', outline: 'none', cursor: 'pointer', textAlign: 'center',
        padding: '4px', flexShrink: 0, borderRadius: '22px', transition: 'all 0.2s ease',
    },
    botaoFiltroAtivo: {
        transform: 'scale(1.1)', boxShadow: '0 0 25px rgba(176, 153, 196, 0.8)',
    },
    miniaturaFiltro: {
        width: 70, height: 70, borderRadius: 18, marginBottom: 8, display: 'flex',
        justifyContent: 'center', alignItems: 'center', background: 'rgba(255, 255, 255, 0.3)',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden',
    },
    nomeFiltro: { fontSize: 14, color: '#5a5a7a', fontWeight: '500' },
    containerCamera: {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100, background: '#000',
    },
    previewVideo: { width: '100%', height: '100%', objectFit: 'cover' },
    containerBotoesCamera: {
        position: 'absolute', bottom: 40, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    botaoCapturarCamera: {
        width: 70, height: 70, borderRadius: '50%', backgroundColor: 'white', cursor: 'pointer', border: '5px solid rgba(255, 255, 255, 0.8)',
    },
    botaoCancelarCamera: {
        position: 'absolute', left: 40, background: 'rgba(0,0,0,0.3)', border: 'none', color: 'white',
        cursor: 'pointer', width: 50, height: 50, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    containerComparador: {
        position: 'relative', width: '100%', height: '100%', overflow: 'hidden', cursor: 'ew-resize',
    },
    imagemComparador: {
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none',
    },
    wrapperImagemComparador: {
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden',
    },
    sliderComparador: {
        position: 'absolute', top: 0, height: '100%', width: '4px', transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', cursor: 'ew-resize', zIndex: 3,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    handleComparador: {
        width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 0 15px rgba(176, 153, 196, 0.9)', display: 'flex', justifyContent: 'center',
        alignItems: 'center', color: '#a881c7',
    },
};

// Estilos
const folhaEstiloGlobal = document.createElement("style");
folhaEstiloGlobal.type = "text/css";
folhaEstiloGlobal.innerText = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    html, body, #root {
        height: 100%; margin: 0; padding: 0; overflow: hidden;
    }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .faixaFiltros::-webkit-scrollbar, .conteudoPrincipal::-webkit-scrollbar { display: none; }
    .faixaFiltros, .conteudoPrincipal { scrollbar-width: none; }
    button:hover {
        transform: scale(1.05); opacity: 0.9;
    }
    .botaoIcone:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;
document.head.appendChild(folhaEstiloGlobal);
