---
layout: ../../../../../../layouts/PostLayout.astro
title: mac flutter 构建失败
description: Gradle 配置问题和 Kotlin 编译 你的项目当前构建失败的原因来自多个 Gradle 配置问题和 Kotlin
  编译冲突。根据你提供的报错信息、项目结构截图与文件，我将帮助你一步步 修改两个关键 build.gradle 文件 （
date: 2025-07-27T09:10:18.446Z
updated: 2025-07-27T09:14:46.922Z
type: 文稿
topic: 编程学习笔记
tags: []
readingMinutes: 2
sourceFolder: 计算机编程/编程学习笔记/移动端开发/毕业设计：GPT-AR 项目
---

```
FAILURE: Build failed with an exception.
```

```
ury@urydeMacBook-Pro-7 AR-GPS % flutter pub get     

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:processDebugResources'.
> A failure occurred while executing com.android.build.gradle.internal.res.LinkApplicationAndroidResourcesTask$TaskAction
   > Android resource linking failed
     aapt2 E 07-27 15:11:43 15847 70457540 LoadedArsc.cpp:94] RES_TABLE_TYPE_TYPE entry offsets overlap actual entry data.
     aapt2 E 07-27 15:11:43 15847 70457540 ApkAssets.cpp:149] Failed to load resources table in APK '/Users/ury/Library/Android/sdk/platforms/android-35/android.jar'.
     error: failed to load include path /Users/ury/Library/Android/sdk/platforms/android-35/android.jar.
     
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:processDebugResources'.
> A failure occurred while executing com.android.build.gradle.internal.res.LinkApplicationAndroidResourcesTask$TaskAction
   > Android resource linking failed
     aapt2 E 07-27 15:19:49 21271 70475387 LoadedArsc.cpp:94] RES_TABLE_TYPE_TYPE entry offsets overlap actual entry data.
     aapt2 E 07-27 15:19:49 21271 70475387 ApkAssets.cpp:149] Failed to load resources table in APK '/Users/ury/Library/Android/sdk/platforms/android-35/android.jar'.
     error: failed to load include path /Users/ury/Library/Android/sdk/platforms/android-35/android.jar.        

ERROR:/Users/ury/Downloads/AR-GPS/build/app/tmp/kotlin-classes/debug/com/example/ar_gps/MainActivity.class: D8: Type com.example.ar_gps.MainActivity is defined multiple times: /Users/ury/Downloads/AR-GPS/build/app/tmp/kotlin-classes/debug/com/example/ar_gps/MainActivity.class, /Users/ury/Downloads/AR-GPS/build/app/intermediates/javac/debug/classes/com/example/ar_gps/MainActivity.class                                                                                                                                                            
org.gradle.workers.WorkerExecutionException: There was a failure while executing work items
        at org.gradle.workers.internal.DefaultWorkerExecutor.workerExecutionException(DefaultWorkerExecutor.java:219)
        at org.gradle.workers.internal.DefaultWorkerExecutor.await(DefaultWorkerExecutor.java:201)
        at com.android.build.gradle.internal.tasks.DexArchiveBuilderTaskDelegate.doProcess(DexArchiveBuilderTaskDelegate.kt:227)
        at com.android.build.gradle.internal.tasks.DexArchiveBuilderTask.doTaskAction(DexArchiveBuilderTask.kt:255)
        at com.android.build.gradle.internal.tasks.NewIncrementalTask$taskAction$$inlined$recordTaskAction$1.invoke(BaseTask.kt:69)
        at com.android.build.gradle.internal.tasks.Blocks.recordSpan(Blocks.java:51)
        at com.android.build.gradle.internal.tasks.NewIncrementalTask.taskAction(NewIncrementalTask.kt:46)
        at jdk.internal.reflect.GeneratedMethodAccessor126.invoke(Unknown Source)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:569)
        at org.gradle.internal.reflect.JavaMethod.invoke(JavaMethod.java:125)
        at org.gradle.api.internal.project.taskfactory.IncrementalTaskAction.doExecute(IncrementalTaskAction.java:45)
        at org.gradle.api.internal.project.taskfactory.StandardTaskAction.execute(StandardTaskAction.java:51)
        at org.gradle.api.internal.project.taskfactory.IncrementalTaskAction.execute(IncrementalTaskAction.java:26)
        at org.gradle.api.internal.project.taskfactory.StandardTaskAction.execute(StandardTaskAction.java:29)
        at org.gradle.api.internal.tasks.execution.TaskExecution$3.run(TaskExecution.java:248)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$1.execute(DefaultBuildOperationRunner.java:29)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$1.execute(DefaultBuildOperationRunner.java:26)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.run(DefaultBuildOperationRunner.java:47)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.run(DefaultBuildOperationExecutor.java:73)
        at org.gradle.api.internal.tasks.execution.TaskExecution.executeAction(TaskExecution.java:233)
        at org.gradle.api.internal.tasks.execution.TaskExecution.executeActions(TaskExecution.java:216)
        at org.gradle.api.internal.tasks.execution.TaskExecution.executeWithPreviousOutputFiles(TaskExecution.java:199)
        at org.gradle.api.internal.tasks.execution.TaskExecution.execute(TaskExecution.java:166)
        at org.gradle.internal.execution.steps.ExecuteStep.executeInternal(ExecuteStep.java:105)
        at org.gradle.internal.execution.steps.ExecuteStep.access$000(ExecuteStep.java:44)
        at org.gradle.internal.execution.steps.ExecuteStep$1.call(ExecuteStep.java:59)
        at org.gradle.internal.execution.steps.ExecuteStep$1.call(ExecuteStep.java:56)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:204)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:199)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.call(DefaultBuildOperationRunner.java:53)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:78)
        at org.gradle.internal.execution.steps.ExecuteStep.execute(ExecuteStep.java:56)
        at org.gradle.internal.execution.steps.ExecuteStep.execute(ExecuteStep.java:44)
        at org.gradle.internal.execution.steps.RemovePreviousOutputsStep.execute(RemovePreviousOutputsStep.java:67)
        at org.gradle.internal.execution.steps.RemovePreviousOutputsStep.execute(RemovePreviousOutputsStep.java:37)
        at org.gradle.internal.execution.steps.CancelExecutionStep.execute(CancelExecutionStep.java:41)
        at org.gradle.internal.execution.steps.TimeoutStep.executeWithoutTimeout(TimeoutStep.java:74)
        at org.gradle.internal.execution.steps.TimeoutStep.execute(TimeoutStep.java:55)
        at org.gradle.internal.execution.steps.CreateOutputsStep.execute(CreateOutputsStep.java:50)
        at org.gradle.internal.execution.steps.CreateOutputsStep.execute(CreateOutputsStep.java:28)
        at org.gradle.internal.execution.steps.CaptureStateAfterExecutionStep.executeDelegateBroadcastingChanges(CaptureStateAfterExecutionStep.java:100)
        at org.gradle.internal.execution.steps.CaptureStateAfterExecutionStep.execute(CaptureStateAfterExecutionStep.java:72)
        at org.gradle.internal.execution.steps.CaptureStateAfterExecutionStep.execute(CaptureStateAfterExecutionStep.java:50)
        at org.gradle.internal.execution.steps.ResolveInputChangesStep.execute(ResolveInputChangesStep.java:40)
        at org.gradle.internal.execution.steps.ResolveInputChangesStep.execute(ResolveInputChangesStep.java:29)
        at org.gradle.internal.execution.steps.BuildCacheStep.executeWithoutCache(BuildCacheStep.java:179)
        at org.gradle.internal.execution.steps.BuildCacheStep.lambda$execute$1(BuildCacheStep.java:70)
        at org.gradle.internal.Either$Right.fold(Either.java:175)
        at org.gradle.internal.execution.caching.CachingState.fold(CachingState.java:59)
        at org.gradle.internal.execution.steps.BuildCacheStep.execute(BuildCacheStep.java:68)
        at org.gradle.internal.execution.steps.BuildCacheStep.execute(BuildCacheStep.java:46)
        at org.gradle.internal.execution.steps.StoreExecutionStateStep.execute(StoreExecutionStateStep.java:36)
        at org.gradle.internal.execution.steps.StoreExecutionStateStep.execute(StoreExecutionStateStep.java:25)
        at org.gradle.internal.execution.steps.RecordOutputsStep.execute(RecordOutputsStep.java:36)
        at org.gradle.internal.execution.steps.RecordOutputsStep.execute(RecordOutputsStep.java:22)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.executeBecause(SkipUpToDateStep.java:91)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.lambda$execute$2(SkipUpToDateStep.java:55)
        at java.base/java.util.Optional.orElseGet(Optional.java:364)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.execute(SkipUpToDateStep.java:55)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.execute(SkipUpToDateStep.java:37)
        at org.gradle.internal.execution.steps.ResolveChangesStep.execute(ResolveChangesStep.java:65)
        at org.gradle.internal.execution.steps.ResolveChangesStep.execute(ResolveChangesStep.java:36)
        at org.gradle.internal.execution.steps.legacy.MarkSnapshottingInputsFinishedStep.execute(MarkSnapshottingInputsFinishedStep.java:37)
        at org.gradle.internal.execution.steps.legacy.MarkSnapshottingInputsFinishedStep.execute(MarkSnapshottingInputsFinishedStep.java:27)
        at org.gradle.internal.execution.steps.ResolveCachingStateStep.execute(ResolveCachingStateStep.java:77)
        at org.gradle.internal.execution.steps.ResolveCachingStateStep.execute(ResolveCachingStateStep.java:38)
        at org.gradle.internal.execution.steps.ValidateStep.execute(ValidateStep.java:108)
        at org.gradle.internal.execution.steps.ValidateStep.execute(ValidateStep.java:55)
        at org.gradle.internal.execution.steps.CaptureStateBeforeExecutionStep.execute(CaptureStateBeforeExecutionStep.java:71)
        at org.gradle.internal.execution.steps.CaptureStateBeforeExecutionStep.execute(CaptureStateBeforeExecutionStep.java:45)
        at org.gradle.internal.execution.steps.SkipEmptyWorkStep.executeWithNonEmptySources(SkipEmptyWorkStep.java:177)
        at org.gradle.internal.execution.steps.SkipEmptyWorkStep.execute(SkipEmptyWorkStep.java:81)
        at org.gradle.internal.execution.steps.SkipEmptyWorkStep.execute(SkipEmptyWorkStep.java:53)
        at org.gradle.internal.execution.steps.RemoveUntrackedExecutionStateStep.execute(RemoveUntrackedExecutionStateStep.java:32)
        at org.gradle.internal.execution.steps.RemoveUntrackedExecutionStateStep.execute(RemoveUntrackedExecutionStateStep.java:21)
        at org.gradle.internal.execution.steps.legacy.MarkSnapshottingInputsStartedStep.execute(MarkSnapshottingInputsStartedStep.java:38)
        at org.gradle.internal.execution.steps.LoadPreviousExecutionStateStep.execute(LoadPreviousExecutionStateStep.java:36)
        at org.gradle.internal.execution.steps.LoadPreviousExecutionStateStep.execute(LoadPreviousExecutionStateStep.java:23)
        at org.gradle.internal.execution.steps.CleanupStaleOutputsStep.execute(CleanupStaleOutputsStep.java:75)
        at org.gradle.internal.execution.steps.CleanupStaleOutputsStep.execute(CleanupStaleOutputsStep.java:41)
        at org.gradle.internal.execution.steps.ExecuteWorkBuildOperationFiringStep.lambda$execute$2(ExecuteWorkBuildOperationFiringStep.java:66)
        at java.base/java.util.Optional.orElseGet(Optional.java:364)
        at org.gradle.internal.execution.steps.ExecuteWorkBuildOperationFiringStep.execute(ExecuteWorkBuildOperationFiringStep.java:66)
        at org.gradle.internal.execution.steps.ExecuteWorkBuildOperationFiringStep.execute(ExecuteWorkBuildOperationFiringStep.java:38)
        at org.gradle.internal.execution.steps.AssignWorkspaceStep.lambda$execute$0(AssignWorkspaceStep.java:32)
        at org.gradle.api.internal.tasks.execution.TaskExecution$4.withWorkspace(TaskExecution.java:293)
        at org.gradle.internal.execution.steps.AssignWorkspaceStep.execute(AssignWorkspaceStep.java:30)
        at org.gradle.internal.execution.steps.AssignWorkspaceStep.execute(AssignWorkspaceStep.java:21)
        at org.gradle.internal.execution.steps.IdentityCacheStep.execute(IdentityCacheStep.java:37)
        at org.gradle.internal.execution.steps.IdentityCacheStep.execute(IdentityCacheStep.java:27)
        at org.gradle.internal.execution.steps.IdentifyStep.execute(IdentifyStep.java:47)
        at org.gradle.internal.execution.steps.IdentifyStep.execute(IdentifyStep.java:34)
        at org.gradle.internal.execution.impl.DefaultExecutionEngine$1.execute(DefaultExecutionEngine.java:64)
        at org.gradle.api.internal.tasks.execution.ExecuteActionsTaskExecuter.executeIfValid(ExecuteActionsTaskExecuter.java:145)
        at org.gradle.api.internal.tasks.execution.ExecuteActionsTaskExecuter.execute(ExecuteActionsTaskExecuter.java:134)
        at org.gradle.api.internal.tasks.execution.FinalizePropertiesTaskExecuter.execute(FinalizePropertiesTaskExecuter.java:46)
        at org.gradle.api.internal.tasks.execution.ResolveTaskExecutionModeExecuter.execute(ResolveTaskExecutionModeExecuter.java:51)
        at org.gradle.api.internal.tasks.execution.SkipTaskWithNoActionsExecuter.execute(SkipTaskWithNoActionsExecuter.java:57)
        at org.gradle.api.internal.tasks.execution.SkipOnlyIfTaskExecuter.execute(SkipOnlyIfTaskExecuter.java:74)
        at org.gradle.api.internal.tasks.execution.CatchExceptionTaskExecuter.execute(CatchExceptionTaskExecuter.java:36)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter$1.executeTask(EventFiringTaskExecuter.java:77)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter$1.call(EventFiringTaskExecuter.java:55)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter$1.call(EventFiringTaskExecuter.java:52)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:204)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:199)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.call(DefaultBuildOperationRunner.java:53)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:78)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter.execute(EventFiringTaskExecuter.java:52)
        at org.gradle.execution.plan.LocalTaskNodeExecutor.execute(LocalTaskNodeExecutor.java:42)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$InvokeNodeExecutorsAction.execute(DefaultTaskExecutionGraph.java:331)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$InvokeNodeExecutorsAction.execute(DefaultTaskExecutionGraph.java:318)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.lambda$execute$0(DefaultTaskExecutionGraph.java:314)
        at org.gradle.internal.operations.CurrentBuildOperationRef.with(CurrentBuildOperationRef.java:80)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.execute(DefaultTaskExecutionGraph.java:314)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.execute(DefaultTaskExecutionGraph.java:303)
        at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.execute(DefaultPlanExecutor.java:463)
        at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.run(DefaultPlanExecutor.java:380)
        at org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)
        at org.gradle.internal.concurrent.AbstractManagedExecutor$1.run(AbstractManagedExecutor.java:47)
        at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
        at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
        at java.base/java.lang.Thread.run(Thread.java:840)
Caused by: org.gradle.workers.internal.DefaultWorkerExecutor$WorkExecutionException: A failure occurred while executing com.android.build.gradle.internal.dexing.DexWorkAction
        at org.gradle.workers.internal.DefaultWorkerExecutor$WorkItemExecution.waitForCompletion(DefaultWorkerExecutor.java:283)
        at org.gradle.internal.work.DefaultAsyncWorkTracker.lambda$waitForItemsAndGatherFailures$2(DefaultAsyncWorkTracker.java:130)
        at org.gradle.internal.Factories$1.create(Factories.java:31)
        at org.gradle.internal.work.DefaultWorkerLeaseService.withoutLocks(DefaultWorkerLeaseService.java:336)
        at org.gradle.internal.work.DefaultWorkerLeaseService.withoutLocks(DefaultWorkerLeaseService.java:319)
        at org.gradle.internal.work.DefaultWorkerLeaseService.withoutLock(DefaultWorkerLeaseService.java:324)
        at org.gradle.internal.work.DefaultAsyncWorkTracker.waitForItemsAndGatherFailures(DefaultAsyncWorkTracker.java:126)
        at org.gradle.internal.work.DefaultAsyncWorkTracker.waitForItemsAndGatherFailures(DefaultAsyncWorkTracker.java:88)
        at org.gradle.internal.work.DefaultAsyncWorkTracker.waitForAll(DefaultAsyncWorkTracker.java:78)
        at org.gradle.internal.work.DefaultAsyncWorkTracker.waitForCompletion(DefaultAsyncWorkTracker.java:66)
        at org.gradle.workers.internal.DefaultWorkerExecutor.await(DefaultWorkerExecutor.java:199)
        at com.android.build.gradle.internal.tasks.DexArchiveBuilderTaskDelegate.doProcess(DexArchiveBuilderTaskDelegate.kt:227)
        at com.android.build.gradle.internal.tasks.DexArchiveBuilderTask.doTaskAction(DexArchiveBuilderTask.kt:255)
        at com.android.build.gradle.internal.tasks.NewIncrementalTask$taskAction$$inlined$recordTaskAction$1.invoke(BaseTask.kt:69)
        at com.android.build.gradle.internal.tasks.Blocks.recordSpan(Blocks.java:51)
        at com.android.build.gradle.internal.tasks.NewIncrementalTask.taskAction(NewIncrementalTask.kt:46)
        at jdk.internal.reflect.GeneratedMethodAccessor126.invoke(Unknown Source)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:569)
        at org.gradle.internal.reflect.JavaMethod.invoke(JavaMethod.java:125)
        at org.gradle.api.internal.project.taskfactory.IncrementalTaskAction.doExecute(IncrementalTaskAction.java:45)
        at org.gradle.api.internal.project.taskfactory.StandardTaskAction.execute(StandardTaskAction.java:51)
        at org.gradle.api.internal.project.taskfactory.IncrementalTaskAction.execute(IncrementalTaskAction.java:26)
        at org.gradle.api.internal.project.taskfactory.StandardTaskAction.execute(StandardTaskAction.java:29)
        at org.gradle.api.internal.tasks.execution.TaskExecution$3.run(TaskExecution.java:248)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$1.execute(DefaultBuildOperationRunner.java:29)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$1.execute(DefaultBuildOperationRunner.java:26)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.run(DefaultBuildOperationRunner.java:47)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.run(DefaultBuildOperationExecutor.java:73)
        at org.gradle.api.internal.tasks.execution.TaskExecution.executeAction(TaskExecution.java:233)
        at org.gradle.api.internal.tasks.execution.TaskExecution.executeActions(TaskExecution.java:216)
        at org.gradle.api.internal.tasks.execution.TaskExecution.executeWithPreviousOutputFiles(TaskExecution.java:199)
        at org.gradle.api.internal.tasks.execution.TaskExecution.execute(TaskExecution.java:166)
        at org.gradle.internal.execution.steps.ExecuteStep.executeInternal(ExecuteStep.java:105)
        at org.gradle.internal.execution.steps.ExecuteStep.access$000(ExecuteStep.java:44)
        at org.gradle.internal.execution.steps.ExecuteStep$1.call(ExecuteStep.java:59)
        at org.gradle.internal.execution.steps.ExecuteStep$1.call(ExecuteStep.java:56)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:204)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:199)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.call(DefaultBuildOperationRunner.java:53)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:78)
        at org.gradle.internal.execution.steps.ExecuteStep.execute(ExecuteStep.java:56)
        at org.gradle.internal.execution.steps.ExecuteStep.execute(ExecuteStep.java:44)
        at org.gradle.internal.execution.steps.RemovePreviousOutputsStep.execute(RemovePreviousOutputsStep.java:67)
        at org.gradle.internal.execution.steps.RemovePreviousOutputsStep.execute(RemovePreviousOutputsStep.java:37)
        at org.gradle.internal.execution.steps.CancelExecutionStep.execute(CancelExecutionStep.java:41)
        at org.gradle.internal.execution.steps.TimeoutStep.executeWithoutTimeout(TimeoutStep.java:74)
        at org.gradle.internal.execution.steps.TimeoutStep.execute(TimeoutStep.java:55)
        at org.gradle.internal.execution.steps.CreateOutputsStep.execute(CreateOutputsStep.java:50)
        at org.gradle.internal.execution.steps.CreateOutputsStep.execute(CreateOutputsStep.java:28)
        at org.gradle.internal.execution.steps.CaptureStateAfterExecutionStep.executeDelegateBroadcastingChanges(CaptureStateAfterExecutionStep.java:100)
        at org.gradle.internal.execution.steps.CaptureStateAfterExecutionStep.execute(CaptureStateAfterExecutionStep.java:72)
        at org.gradle.internal.execution.steps.CaptureStateAfterExecutionStep.execute(CaptureStateAfterExecutionStep.java:50)
        at org.gradle.internal.execution.steps.ResolveInputChangesStep.execute(ResolveInputChangesStep.java:40)
        at org.gradle.internal.execution.steps.ResolveInputChangesStep.execute(ResolveInputChangesStep.java:29)
        at org.gradle.internal.execution.steps.BuildCacheStep.executeWithoutCache(BuildCacheStep.java:179)
        at org.gradle.internal.execution.steps.BuildCacheStep.lambda$execute$1(BuildCacheStep.java:70)
        at org.gradle.internal.Either$Right.fold(Either.java:175)
        at org.gradle.internal.execution.caching.CachingState.fold(CachingState.java:59)
        at org.gradle.internal.execution.steps.BuildCacheStep.execute(BuildCacheStep.java:68)
        at org.gradle.internal.execution.steps.BuildCacheStep.execute(BuildCacheStep.java:46)
        at org.gradle.internal.execution.steps.StoreExecutionStateStep.execute(StoreExecutionStateStep.java:36)
        at org.gradle.internal.execution.steps.StoreExecutionStateStep.execute(StoreExecutionStateStep.java:25)
        at org.gradle.internal.execution.steps.RecordOutputsStep.execute(RecordOutputsStep.java:36)
        at org.gradle.internal.execution.steps.RecordOutputsStep.execute(RecordOutputsStep.java:22)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.executeBecause(SkipUpToDateStep.java:91)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.lambda$execute$2(SkipUpToDateStep.java:55)
        at java.base/java.util.Optional.orElseGet(Optional.java:364)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.execute(SkipUpToDateStep.java:55)
        at org.gradle.internal.execution.steps.SkipUpToDateStep.execute(SkipUpToDateStep.java:37)
        at org.gradle.internal.execution.steps.ResolveChangesStep.execute(ResolveChangesStep.java:65)
        at org.gradle.internal.execution.steps.ResolveChangesStep.execute(ResolveChangesStep.java:36)
        at org.gradle.internal.execution.steps.legacy.MarkSnapshottingInputsFinishedStep.execute(MarkSnapshottingInputsFinishedStep.java:37)
        at org.gradle.internal.execution.steps.legacy.MarkSnapshottingInputsFinishedStep.execute(MarkSnapshottingInputsFinishedStep.java:27)
        at org.gradle.internal.execution.steps.ResolveCachingStateStep.execute(ResolveCachingStateStep.java:77)
        at org.gradle.internal.execution.steps.ResolveCachingStateStep.execute(ResolveCachingStateStep.java:38)
        at org.gradle.internal.execution.steps.ValidateStep.execute(ValidateStep.java:108)
        at org.gradle.internal.execution.steps.ValidateStep.execute(ValidateStep.java:55)
        at org.gradle.internal.execution.steps.CaptureStateBeforeExecutionStep.execute(CaptureStateBeforeExecutionStep.java:71)
        at org.gradle.internal.execution.steps.CaptureStateBeforeExecutionStep.execute(CaptureStateBeforeExecutionStep.java:45)
        at org.gradle.internal.execution.steps.SkipEmptyWorkStep.executeWithNonEmptySources(SkipEmptyWorkStep.java:177)
        at org.gradle.internal.execution.steps.SkipEmptyWorkStep.execute(SkipEmptyWorkStep.java:81)
        at org.gradle.internal.execution.steps.SkipEmptyWorkStep.execute(SkipEmptyWorkStep.java:53)
        at org.gradle.internal.execution.steps.RemoveUntrackedExecutionStateStep.execute(RemoveUntrackedExecutionStateStep.java:32)
        at org.gradle.internal.execution.steps.RemoveUntrackedExecutionStateStep.execute(RemoveUntrackedExecutionStateStep.java:21)
        at org.gradle.internal.execution.steps.legacy.MarkSnapshottingInputsStartedStep.execute(MarkSnapshottingInputsStartedStep.java:38)
        at org.gradle.internal.execution.steps.LoadPreviousExecutionStateStep.execute(LoadPreviousExecutionStateStep.java:36)
        at org.gradle.internal.execution.steps.LoadPreviousExecutionStateStep.execute(LoadPreviousExecutionStateStep.java:23)
        at org.gradle.internal.execution.steps.CleanupStaleOutputsStep.execute(CleanupStaleOutputsStep.java:75)
        at org.gradle.internal.execution.steps.CleanupStaleOutputsStep.execute(CleanupStaleOutputsStep.java:41)
        at org.gradle.internal.execution.steps.ExecuteWorkBuildOperationFiringStep.lambda$execute$2(ExecuteWorkBuildOperationFiringStep.java:66)
        at java.base/java.util.Optional.orElseGet(Optional.java:364)
        at org.gradle.internal.execution.steps.ExecuteWorkBuildOperationFiringStep.execute(ExecuteWorkBuildOperationFiringStep.java:66)
        at org.gradle.internal.execution.steps.ExecuteWorkBuildOperationFiringStep.execute(ExecuteWorkBuildOperationFiringStep.java:38)
        at org.gradle.internal.execution.steps.AssignWorkspaceStep.lambda$execute$0(AssignWorkspaceStep.java:32)
        at org.gradle.api.internal.tasks.execution.TaskExecution$4.withWorkspace(TaskExecution.java:293)
        at org.gradle.internal.execution.steps.AssignWorkspaceStep.execute(AssignWorkspaceStep.java:30)
        at org.gradle.internal.execution.steps.AssignWorkspaceStep.execute(AssignWorkspaceStep.java:21)
        at org.gradle.internal.execution.steps.IdentityCacheStep.execute(IdentityCacheStep.java:37)
        at org.gradle.internal.execution.steps.IdentityCacheStep.execute(IdentityCacheStep.java:27)
        at org.gradle.internal.execution.steps.IdentifyStep.execute(IdentifyStep.java:47)
        at org.gradle.internal.execution.steps.IdentifyStep.execute(IdentifyStep.java:34)
        at org.gradle.internal.execution.impl.DefaultExecutionEngine$1.execute(DefaultExecutionEngine.java:64)
        at org.gradle.api.internal.tasks.execution.ExecuteActionsTaskExecuter.executeIfValid(ExecuteActionsTaskExecuter.java:145)
        at org.gradle.api.internal.tasks.execution.ExecuteActionsTaskExecuter.execute(ExecuteActionsTaskExecuter.java:134)
        at org.gradle.api.internal.tasks.execution.FinalizePropertiesTaskExecuter.execute(FinalizePropertiesTaskExecuter.java:46)
        at org.gradle.api.internal.tasks.execution.ResolveTaskExecutionModeExecuter.execute(ResolveTaskExecutionModeExecuter.java:51)
        at org.gradle.api.internal.tasks.execution.SkipTaskWithNoActionsExecuter.execute(SkipTaskWithNoActionsExecuter.java:57)
        at org.gradle.api.internal.tasks.execution.SkipOnlyIfTaskExecuter.execute(SkipOnlyIfTaskExecuter.java:74)
        at org.gradle.api.internal.tasks.execution.CatchExceptionTaskExecuter.execute(CatchExceptionTaskExecuter.java:36)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter$1.executeTask(EventFiringTaskExecuter.java:77)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter$1.call(EventFiringTaskExecuter.java:55)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter$1.call(EventFiringTaskExecuter.java:52)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:204)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:199)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.call(DefaultBuildOperationRunner.java:53)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:78)
        at org.gradle.api.internal.tasks.execution.EventFiringTaskExecuter.execute(EventFiringTaskExecuter.java:52)
        at org.gradle.execution.plan.LocalTaskNodeExecutor.execute(LocalTaskNodeExecutor.java:42)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$InvokeNodeExecutorsAction.execute(DefaultTaskExecutionGraph.java:331)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$InvokeNodeExecutorsAction.execute(DefaultTaskExecutionGraph.java:318)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.lambda$execute$0(DefaultTaskExecutionGraph.java:314)
        at org.gradle.internal.operations.CurrentBuildOperationRef.with(CurrentBuildOperationRef.java:80)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.execute(DefaultTaskExecutionGraph.java:314)
        at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.execute(DefaultTaskExecutionGraph.java:303)
        at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.execute(DefaultPlanExecutor.java:463)
        at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.run(DefaultPlanExecutor.java:380)
        at org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)
        at org.gradle.internal.concurrent.AbstractManagedExecutor$1.run(AbstractManagedExecutor.java:47)
        at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
        at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
        at java.base/java.lang.Thread.run(Thread.java:840)
Caused by: org.gradle.tooling.BuildException: Failed to process: /Users/ury/Downloads/AR-GPS/build/app/tmp/kotlin-classes/debug, /Users/ury/Downloads/AR-GPS/build/app/intermediates/javac/debug/classes                                                                                                                                                                  
        at com.android.build.gradle.internal.dexing.DexWorkAction.run(DexWorkAction.kt:53)
        at com.android.build.gradle.internal.profile.ProfileAwareWorkAction.execute(ProfileAwareWorkAction.kt:74)
        at org.gradle.workers.internal.DefaultWorkerServer.execute(DefaultWorkerServer.java:63)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1$1.create(NoIsolationWorkerFactory.java:66)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1$1.create(NoIsolationWorkerFactory.java:62)
        at org.gradle.internal.classloader.ClassLoaderUtils.executeInClassloader(ClassLoaderUtils.java:100)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1.lambda$execute$0(NoIsolationWorkerFactory.java:62)
        at org.gradle.workers.internal.AbstractWorker$1.call(AbstractWorker.java:44)
        at org.gradle.workers.internal.AbstractWorker$1.call(AbstractWorker.java:41)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:204)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$CallableBuildOperationWorker.execute(DefaultBuildOperationRunner.java:199)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:66)
        at org.gradle.internal.operations.DefaultBuildOperationRunner$2.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:157)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.execute(DefaultBuildOperationRunner.java:59)
        at org.gradle.internal.operations.DefaultBuildOperationRunner.call(DefaultBuildOperationRunner.java:53)
        at org.gradle.internal.operations.DefaultBuildOperationExecutor.call(DefaultBuildOperationExecutor.java:78)
        at org.gradle.workers.internal.AbstractWorker.executeWrappedInBuildOperation(AbstractWorker.java:41)
        at org.gradle.workers.internal.NoIsolationWorkerFactory$1.execute(NoIsolationWorkerFactory.java:59)
        at org.gradle.workers.internal.DefaultWorkerExecutor.lambda$submitWork$0(DefaultWorkerExecutor.java:170)
        at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.runExecution(DefaultConditionalExecutionQueue.java:187)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.access$700(DefaultConditionalExecutionQueue.java:120)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner$1.run(DefaultConditionalExecutionQueue.java:162)
        at org.gradle.internal.Factories$1.create(Factories.java:31)
        at org.gradle.internal.work.DefaultWorkerLeaseService.withLocks(DefaultWorkerLeaseService.java:264)
        at org.gradle.internal.work.DefaultWorkerLeaseService.runAsWorkerThread(DefaultWorkerLeaseService.java:128)
        at org.gradle.internal.work.DefaultWorkerLeaseService.runAsWorkerThread(DefaultWorkerLeaseService.java:133)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.runBatch(DefaultConditionalExecutionQueue.java:157)
        at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.run(DefaultConditionalExecutionQueue.java:126)
        at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)
        at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
        ... 5 more
Caused by: com.android.builder.dexing.DexArchiveBuilderException: Failed to process: /Users/ury/Downloads/AR-GPS/build/app/tmp/kotlin-classes/debug, /Users/ury/Downloads/AR-GPS/build/app/intermediates/javac/debug/classes                                                                                                                                              
        at com.android.build.gradle.internal.dexing.DexWorkActionKt.process(DexWorkAction.kt:179)
        at com.android.build.gradle.internal.dexing.DexWorkActionKt.processNonIncrementally(DexWorkAction.kt:145)
        at com.android.build.gradle.internal.dexing.DexWorkActionKt.launchProcessing(DexWorkAction.kt:73)
        at com.android.build.gradle.internal.dexing.DexWorkAction.run(DexWorkAction.kt:45)
        ... 36 more
Caused by: com.android.builder.dexing.DexArchiveBuilderException: Error while dexing.
        at com.android.builder.dexing.D8DexArchiveBuilder.getExceptionToRethrow(D8DexArchiveBuilder.java:140)
        at com.android.builder.dexing.D8DexArchiveBuilder.convert(D8DexArchiveBuilder.java:117)
        at com.android.build.gradle.internal.dexing.DexWorkActionKt.process(DexWorkAction.kt:175)
        ... 39 more
Caused by: com.android.tools.r8.CompilationFailedException: Compilation failed to complete, origin: /Users/ury/Downloads/AR-GPS/build/app/tmp/kotlin-classes/debug/com/example/ar_gps/MainActivity.class                                                                                                                                                                  
        at Version.fakeStackEntry(Version_3.3.70.java:0)
        at com.android.tools.r8.internal.Fj.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:75)
        at com.android.tools.r8.internal.Fj.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:28)
        at com.android.tools.r8.internal.Fj.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:27)
        at com.android.tools.r8.internal.Fj.b(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:2)
        at com.android.tools.r8.D8.run(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:11)
        at com.android.builder.dexing.D8DexArchiveBuilder.convert(D8DexArchiveBuilder.java:115)
        ... 40 more
Caused by: com.android.tools.r8.internal.f: Type com.example.ar_gps.MainActivity is defined multiple times: /Users/ury/Downloads/AR-GPS/build/app/tmp/kotlin-classes/debug/com/example/ar_gps/MainActivity.class, /Users/ury/Downloads/AR-GPS/build/app/intermediates/javac/debug/classes/com/example/ar_gps/MainActivity.class                                           
        at com.android.tools.r8.internal.JT.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:14)
        at com.android.tools.r8.internal.JT.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:22)
        at com.android.tools.r8.internal.HN.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:33)
        at com.android.tools.r8.internal.HN.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:10)
        at java.base/java.util.concurrent.ConcurrentHashMap.merge(ConcurrentHashMap.java:2056)
        at com.android.tools.r8.internal.HN.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:6)
        at com.android.tools.r8.graph.B2$a.e(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:4)
        at com.android.tools.r8.dex.b.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:110)
        at com.android.tools.r8.dex.b.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:28)
        at com.android.tools.r8.D8.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:25)
        at com.android.tools.r8.D8.d(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:606)
        at com.android.tools.r8.D8.b(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:1)
        at com.android.tools.r8.internal.Fj.a(R8_3.3.70_49b71801b8b3de79ea68cec3bf950786c8f90f7a560cea4a2d23a82079b17d04:24)
        ... 43 more


FAILURE: Build failed with an exception.

BUILD FAILED in 23s
Running Gradle task 'assembleDebug'...                             24.4s
Error: Gradle task assembleDebug failed with exit code 1
ury@urydeMacBook-Pro-7 AR-GPS % 

```
Gradle 配置问题和 Kotlin 编译

你的项目当前构建失败的原因来自多个 Gradle 配置问题和 Kotlin 编译冲突。根据你提供的报错信息、项目结构截图与文件，我将帮助你一步步**修改两个关键 `build.gradle` 文件**（分别在 `android/build.gradle` 和 `android/app/build.gradle`）以解决问题并成功运行地图页。

---

## ✅ 总体目标

1. **升级 Android Gradle Plugin 到 8.1.0+**
    
2. **配置 `compileSdk = 34`（不建议用 35，当前 SDK 35 有 bug）**
    
3. **解决 `MainActivity.class 重复定义` 问题**
    
4. **确保 `classpath`、`dependencies` 均已设置正确**
    

---

## ✅ 修改 1：`android/build.gradle`（项目级）

请将你的 **`android/build.gradle`** 替换为以下内容：

```gradle
buildscript {
    ext.kotlin_version = '1.8.22'

    repositories {
        google()
        mavenCentral()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:8.1.2'  // ✅ 关键更新
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
        classpath 'com.google.gms:google-services:4.4.0'  // ✅ Firebase 若使用
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
```

---

## ✅ 修改 2：`android/app/build.gradle`（模块级）

请将你的 **`android/app/build.gradle`** 替换为以下内容：

```gradle
plugins {
    id 'com.android.application'
    id 'kotlin-android'
}

android {
    namespace "com.example.ar_gps"
    compileSdk = 34  // ✅ 使用稳定版 SDK

    defaultConfig {
        applicationId "com.example.ar_gps"
        minSdk = 21
        targetSdk = 34
        versionCode 1
        versionName "1.0"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_17
        targetCompatibility JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = '17'
    }

    buildFeatures {
        viewBinding true
    }
}

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    implementation 'androidx.core:core-ktx:1.10.1'
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.9.0'

    implementation 'com.google.android.gms:play-services-maps:18.1.0'
    implementation 'com.google.android.gms:play-services-location:21.0.1'

    // Flutter embedding (由 Flutter 自动处理)
}
```

---

## ✅ 额外操作（必须执行）

### 1. 删除重复的 `MainActivity.class` 缓存

```bash
rm -rf build/
rm -rf .dart_tool/
flutter clean
```

> 原因：你的日志中提示 MainActivity 被重复定义，通常是缓存残留导致。

---

## ✅ 重新运行命令

```bash
flutter pub get
flutter clean
flutter run
```

---

## ✅ 注意事项

- 若仍有问题，建议删除 `android/sdk/platforms/android-35`，改用 SDK 34：
    
    ```bash
    sdkmanager "platforms;android-34"
    ```
    
- 若没有使用 Kotlin，你可以将 `kotlin` 相关插件移除。
    

---

如果你确认这两个 `build.gradle` 文件中没有其他手动修改的内容（比如 Flutter plugin 手动接入），可以放心替换后重新构建。

是否需要我将上面两个完整代码段直接保存为 `build.gradle` 文件供你下载？也可以继续上传 `android/app/build.gradle` 文件让我一起检查。
