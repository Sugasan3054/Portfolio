export type Project = {
    id: string;
    slug: string;
    title: string;
    category: 'Web App' | 'Game' | 'Tool';
    description: string;
    thumbnail: string;
    tags: string[];
    link: string;
    challenge?: string;
    solution?: string;
    codeSnippet?: string;
    demoUrl?: string;
    repoUrl?: string;
    overview?: string;
};

export const projects: Project[] = [
    {
        id: '1',
        slug: 'music-mixing', // URLも合わせるなら変更（任意）
        title: 'Music Mixing (Sound Stealth Puzzle)',
        category: 'Game',
        description: '「音を録音・再生して物理現象を引き起こす」ステルスアクションパズル。敵の聴覚AIを回避しながら環境音を収集し、特定の周波数でのみ破壊可能なギミックを突破して進むゲームシステム。',
        overview: `
    <h3 class="text-xl font-bold text-white mt-6 mb-3">コンセプト</h3>
    <p class="mb-4 text-slate-300">
      「音を録音して、それを再生することで物理現象を引き起こす」というコアメカニクスを用いたパズルゲームです。
      敵の聴覚AIをかいくぐりながら環境音を収集し、特定の周波数でのみ破壊可能なギミックを突破します。
    </p>
    <h3 class="text-xl font-bold text-white mt-6 mb-3">技術的な挑戦</h3>
    <p class="mb-4 text-slate-300">
      録音判定に厳密な制限（移動や環境ノイズによる失敗）を実装しました。
      また、ギミック系クラスを汎用化し、Inspector上で反応する音IDを設定可能にすることで、レベルデザインの効率化を実現しています。
    </p>
        `,
        thumbnail: '/assets/music-mixing.png',
        tags: ['Unity', 'C#', 'AI Programming', 'Event Driven'],
        link: '/projects/music-mixing',
        challenge: '録音判定に厳密な制限（移動や環境ノイズによる失敗）が必要でした。また、クエストやギミックが増えてもコードを変更せずに調整できる拡張性が課題でした。',
        solution: '録音中は「EnvironmentNoiseChecker」で環境音を、「RecordingFailureMonitor」でプレイヤーの移動を監視し、条件を満たさない場合は即座に失敗させるロジックを実装。ギミック系は「DestructibleObject」として汎用化し、Inspector上で反応する音IDを設定可能にすることで、レベルデザインの効率化を実現しました。',
        codeSnippet: `// 録音処理とノイズ判定の簡略コード例
    public class SoundRecorder : MonoBehaviour {
        [SerializeField] private float maxNoiseThreshold = 0.5f;

        public void StartRecording(ISoundSource target) {
            // 移動監視と環境ノイズチェックを開始
            if (EnvironmentNoiseChecker.CurrentNoiseLevel > maxNoiseThreshold) {
                NotifyFailure("Too verify noisy environment");
                return;
            }
        
            // プレイヤーが動いたら中断するイベント購読
            RecordingFailureMonitor.OnPlayerMoved += CancelRecording;
        
            StartCoroutine(RecordingProcess(target));
        }

        private void CancelRecording() {
            // 失敗処理とUI更新
            RecordingFailureMonitor.OnPlayerMoved -= CancelRecording;
            UIManager.Instance.ShowAlert("足音を立ててはいけません");
        }
    }`,
    },
    {
        id: '2',
        slug: 'portfolio-site',
        title: 'Portfolio Website',
        category: 'Web App',
        description: '現在閲覧いただいているポートフォリオサイト。最新のGoogle製IDE「Antigravity」とAIエージェントを活用した、AIネイティブな開発フローで構築しました。',
        thumbnail: '/assets/portfolio-thumbnail.jpg',
        tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
        link: '/projects/portfolio-site',
        challenge: 'モダンなフロントエンド技術（Astro）とコンテナ技術（Docker）を組み合わせつつ、AIエージェントに指示を出してコーディングを行う「Agentic Workflow」の実践。',
        solution: '要件定義から実装、デバッグまでをAIと対話しながら進めることで、開発効率を劇的に向上させました。また、Tailwind CSSを用いたダークモードデザインの厳密な再現を行いました。',
        repoUrl: 'https://github.com/Sugasan3054/Portfolio'
    },
    {
        id: '3',
        slug: 'simple-llm',
        title: 'Simple LLM Chat',
        category: 'Tool',
        description: 'Antigravity環境を活用して構築した簡易的なLLMアプリケーション。自然言語処理の基礎理解と、AIモデルのインテグレーション実験として開発。',
        thumbnail: '/assets/simple-llm.png',
        tags: ['Python', 'Antigravity', 'LLM API'],
        link: '/projects/simple-llm',
        challenge: 'LLMからの応答精度とレイテンシのバランス、およびプロンプトエンジニアリングによる回答品質の制御。',
        solution: 'コンテキスト管理の最適化を行い、一貫性のある対話を実現するためのプロンプト設計を行いました。',
    },
    {
        id: '4',
        slug: 'remains-explorers',
        title: 'REMAINS EXPLORERS (Battle Minesweeper)',
        category: 'Game',
        description: 'マインスイーパーに「役職」と「心理戦」を掛け合わせた1vs1オンライン対戦ゲーム。10種類の役職能力と推理要素により、運だけではない高度な戦略戦を実現。',
        overview: `
    <h3 class="text-xl font-bold text-white mt-6 mb-3">ゲームシステム</h3>
    <p class="mb-4 text-slate-300">
      「マインスイーパ」をリアルタイム1vs1の対戦形式にリメイクしたオンラインゲームです。
      10種類の役職能力と推理要素により、運だけではない<strong>高度な戦略戦</strong>を実現しました。
      誤爆時のペナルティや相手の進行状況が見えるUIなど、対戦ゲームとしてのUXを意識しています。
    </p>
    <h3 class="text-xl font-bold text-white mt-6 mb-3">技術的な挑戦</h3>
    <p class="mb-4 text-slate-300">
      <strong>Photon PUN2</strong>を用いて盤面とプレイヤーアクションを同期し、単なるロジックパズルに「駆け引き」を加えました。
      権限委譲による公平性の担保や、排他制御によるバグ防止など、堅牢な同期処理を実装しています。
    </p>
        `,
        thumbnail: '/assets/remains-explorers.png',
        tags: ['Unity', 'C#', 'Photon PUN2', 'GenAI (Canva)'],
        link: '/projects/remains-explorers',
        challenge: 'オンライン対戦における公平性の担保（乱数同期）と、通信ラグによる操作重複（連打バグ）の防止が最大の課題でした。',
        solution: '「猟犬師」等のランダム能力はマスタークライアントでのみ乱数生成を行う権限委譲設計とし、全画面での結果整合性を担保。また `isAbilityInProcess` フラグによる排他制御を導入し、堅牢な同期処理を実現しました。',
        codeSnippet: `// 公平性を担保するための権限委譲ロジック例
public void UseHoundAbility() {
    if (isAbilityInProcess) return; // 連打防止ロック
    isAbilityInProcess = true;
    
    // 乱数計算はマスタークライアントに一任
    photonView.RPC(nameof(RequestSafeTiles), RpcTarget.MasterClient);
}

[PunRPC]
void RequestSafeTiles(PhotonMessageInfo info) {
    // マスター側で確定した結果のみを全員に配信
    int[] safeTileIds = CalculateRandomSafeTiles(3);
    photonView.RPC(nameof(SyncHoundEffect), RpcTarget.All, safeTileIds);
}`,
        demoUrl: 'https://play.unity.com/en/games/acba1f88-d99d-46c0-b382-fc68378d1cf8/remains-explorers'
    },
    {
        id: '5',
        slug: 'anime-face-recognition',
        title: '老若認証 (Face Recognition App)',
        category: 'Web App',
        description: '「どんな年代でも認識できる」をコンセプトにした顔識別アプリ。映画のシステムをモチーフにし、ユーザーのフィードバックでAIが賢くなる学習機能を搭載。',
        overview: `
    <h3 class="text-xl font-bold text-white mt-6 mb-3">コンセプト</h3>
    <p class="mb-4 text-slate-300">
      「どんな年代でも認識できる」をコンセプトにした、映画のシステムをモチーフにした顔識別アプリです。
       PythonとFlaskを用い、ユーザーのフィードバックでAIが賢くなる学習機能を搭載しています。
    </p>
    <h3 class="text-xl font-bold text-white mt-6 mb-3">実装のポイント</h3>
    <p class="mb-4 text-slate-300">
      OpenCVと<strong>CNN（畳み込みニューラルネットワーク）</strong>を活用して、Webカメラ映像内の顔を検知・識別します。
      バックエンド（Flask/Docker）からフロントエンドまでを一貫して実装し、データ登録も含む完結したWebアプリとして構築しました。
    </p>
        `,
        thumbnail: '/assets/face-recognition.png',
        tags: ['Python', 'Flask', 'Docker', 'Railway', 'OpenCV'],
        link: '/projects/anime-face-recognition',
        challenge: 'ユーザーがアップロードした画像を用いて動的にモデルを改善する「学習モード」の実装と、それを支える軽量で高速なバックエンド環境の構築。',
        solution: 'バックエンドにFlaskを採用し、Dockerコンテナ化することでRailway等のクラウド環境での高速な起動・停止を実現。ユーザーによるラベル修正をデータセットに反映するループを構築しました。',
        codeSnippet: `# Flaskでの推論エンドポイント例
@app.route('/predict', methods=['POST'])
def predict():
    img = request.files['image']
    # 前処理と顔検出
    face = detect_face(img)
    # 類似度判定
    label, similarity = model.predict(face)
    return jsonify({
        'label': label,
        'similarity': f"{similarity:.1f}%"
    })`,
        demoUrl: 'https://sugasan3054.github.io/image/',
        repoUrl: 'https://github.com/Sugasan3054/image'
    },
];