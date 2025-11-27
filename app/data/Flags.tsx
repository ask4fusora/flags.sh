import { DisabledOptions } from "./interface/DisabledOptions";

/**
 * Additional configuration for Aikar's flags.
 */
const aikarsFlags = {
    "base": "-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true",
    "standard": "-XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20",
    "large": "-XX:G1NewSizePercent=40 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15"
};

const meowiceFlags = {
    "g1gc": "-XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1MaxNewSizePercent=50 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=15 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=20 -XX:G1MixedGCLiveThresholdPercent=90 -XX:SurvivorRatio=32 -XX:G1HeapWastePercent=5 -XX:MaxTenuringThreshold=1 -XX:+PerfDisableSharedMem -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=3 -XX:+AlwaysActAsServerClassMachine -XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2M -XX:+UseLargePages -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseCompressedOops -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches -XX:+SegmentedCodeCache -Djdk.nio.maxCachedBufferSize=262144 -Djdk.graal.UsePriorityInlining=true -Djdk.graal.Vectorization=true -Djdk.graal.OptDuplication=true -Djdk.graal.DetectInvertedLoopsAsCounted=true -Djdk.graal.LoopInversion=true -Djdk.graal.VectorizeHashes=true -Djdk.graal.EnterprisePartialUnroll=true -Djdk.graal.VectorizeSIMD=true -Djdk.graal.StripMineNonCountedLoops=true -Djdk.graal.SpeculativeGuardMovement=true -Djdk.graal.TuneInlinerExploration=1 -Djdk.graal.LoopRotation=true -Djdk.graal.CompilerConfiguration=enterprise",
    "zgc": "-XX:+UseZGC -XX:-ZProactive -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+PerfDisableSharedMem -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=1 -XX:+AlwaysActAsServerClassMachine -XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2M -XX:+UseLargePages -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseCompressedOops -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches -XX:+SegmentedCodeCache -Djdk.nio.maxCachedBufferSize=262144 -Djdk.graal.UsePriorityInlining=true -Djdk.graal.Vectorization=true -Djdk.graal.OptDuplication=true -Djdk.graal.DetectInvertedLoopsAsCounted=true -Djdk.graal.LoopInversion=true -Djdk.graal.VectorizeHashes=true -Djdk.graal.EnterprisePartialUnroll=true -Djdk.graal.VectorizeSIMD=true -Djdk.graal.StripMineNonCountedLoops=true -Djdk.graal.SpeculativeGuardMovement=true -Djdk.graal.TuneInlinerExploration=1 -Djdk.graal.LoopRotation=true -Djdk.graal.CompilerConfiguration=enterprise"
};

/**
 * Options for the flag results.
 */
interface ResultOptions extends PrefixOptions, SuffixOptions {};

/**
 * Options for the flag prefix.
 */
interface PrefixOptions {
    /**
     * The amount of memory to allocate in gigabytes.
     */
    "memory": number,

    /**
     * Whether to recalculate memory and add flags for Pterodactyl's console.
     */
    "pterodactyl": boolean,

    /**
     * Whether to add incubating vector flags for modern versions of Java Hotspot.
     */
    "modernVectors": boolean,
}

/**
 * Options for the flag suffix.
 */
interface SuffixOptions {
    /**
     * Filename to start.
     */
    "filename": string,

    /**
     * Whether to enable the GUI.
     */
    "gui": boolean
}

/**
 * A flag type.
 */
export interface FlagType {
    /**
     * The key utilized in the flag selector.
     */
    "key": string,

    /**
     * The label to use in the flag selector.
     */
    "label": string,

    /**
     * The description to use in the flag selector.
     */
    "description"?: string,

    /**
     * The function used to get the results.
     */
    "result": ({ memory, filename, gui, modernVectors }: ResultOptions) => string,

    /**
     * Options for the disabled components.
     */
    "disabled"?: DisabledOptions
}

/**
 * Interface for the Flags object.
 */
export interface FlagsInterface {
    /**
     * The default flags.
     */
    "default": FlagType,

    /**
     * Flag types.
     */
    "types": {
        [key: string]: FlagType
    },

    /**
     * Prefix of every flag type.
     */
    "prefix": ({ memory, modernVectors }: PrefixOptions) => string,

    /**
     * Suffix of every flag type.
     */
    "suffix": ({ filename, gui }: SuffixOptions) => string
}

/**
 * The flags that are available to the app.
 */
export const Flags: FlagsInterface = {
    get "default"() {
        return this.types.aikars;
    },
    "types": {
        "none": {
            "key": "none",
            "label": "None",
            "result": ({ memory, filename, gui, pterodactyl, modernVectors }) => {
                return `${Flags.prefix({ memory, pterodactyl, modernVectors })} ${Flags.suffix({ filename, gui })}`;
            }
        },
        "aikars": {
            "key": "aikars",
            "label": "Aikar's Flags",
            "description": "The high-performance and recommended flags.",
            "result": ({ memory, filename, gui, pterodactyl, modernVectors }) => {
                const base = `${aikarsFlags.base} ${memory >= 12 ? aikarsFlags.large : aikarsFlags.standard}`;
                return `${Flags.prefix({ memory, pterodactyl, modernVectors })} ${base} ${Flags.suffix({ filename, gui })}`;
            }
        },
        "meowice": {
            "key": "meowice",
            "label": "MeowIce's Flags",
            "description": "Optimization flags aimed for modern JVM (24+) and minecraft servers (1.21.x and up).",
            "result": ({ memory, filename, gui, pterodactyl, modernVectors }) => {
                const flags = (memory >= 32) ? `-XX:SoftMaxHeapSize=${memory * 1024 - 2048}M ${meowiceFlags.zgc}` : meowiceFlags.g1gc;
                return `${Flags.prefix({ memory, pterodactyl, modernVectors })} ${flags} ${Flags.suffix({ filename, gui })}`;
            }
        },
        "velocity": {
            "key": "velocity",
            "label": "Velocity & Waterfall",
            "description": "Flags that work best with proxy software.",
            "result": ({ memory, filename, gui, pterodactyl, modernVectors }) => {
                const base = "-XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15";
                return `${Flags.prefix({ memory, pterodactyl, modernVectors })} ${base} ${Flags.suffix({ filename, gui })}`;
            },
            "disabled": {
                "gui": true,
                "modernVectors": true
            }
        }
    },
    "prefix": ({ memory, pterodactyl, modernVectors }) => {
        const displayMemory = `${(memory * 1024)?.toFixed(0)}M`;
        let base = `java -Xms${displayMemory} -Xmx${displayMemory}`;

        // Pterodactyl flags
        if (pterodactyl) {
            base += " -Dterminal.jline=false -Dterminal.ansi=true";
        }

        // SIMD vectors
        if (modernVectors) {
            base += " --add-modules=jdk.incubator.vector";
        }

        return base;
    },
    "suffix": ({ filename, gui }) => {
        return `-jar ${filename} ${!gui ? "--nogui" : ""}`.trim();
    }
};
